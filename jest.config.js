module.exports = {
    preset: 'ts-jest',
    cache: true,
    cacheDirectory: './.cache_jest',
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    transformIgnorePatterns: ['node_modules'],
    moduleNameMapper: {
        // '^@app/(.*)': '<rootDir>/src/app/$1', // This should also be defined in the tsconfig.json -> path
    },
    globals: {
        'ts-jest': {
            diagnostics: true,
            isolatedModules: true,
            allowSyntheticDefaultImports: true,
        },
    },
    verbose: true,
}
