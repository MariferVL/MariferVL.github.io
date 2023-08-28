const path = require('path');
const { Compilation, sources } = require('webpack'); 

module.exports = {
    entry: './public/js/app.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            },
            {
                test: /\.(mp4|webm)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/videos',
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            (compiler) => {
                compiler.hooks.compilation.tap('CustomOptimizations', (compilation) => {
                    compilation.hooks.processAssets.tapAsync(
                        {
                            name: 'CustomOptimizations',
                            stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE,
                        },
                        async (assets, callback) => {
                            const cssOptimizer = new CssNanoOptimizer();
                            await Promise.all(Object.keys(assets).map(async (assetName) => {
                                if (assetName.endsWith('.css')) {
                                    const asset = assets[assetName];
                                    const optimizedCss = await cssOptimizer.optimize(asset.source());
                                    asset.source = () => optimizedCss;
                                }
                            }));
                            
                            const terser = new TerserPlugin({
                                extractComments: false,
                                terserOptions: {
                                    format: {
                                        comments: false,
                                    },
                                },
                            });
                            await terser.optimize(compilation);

                            callback(); 
                        }
                    );
                });
            },
        ],
    },
};
