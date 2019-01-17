module.exports = config => {
    return {
        ...config,
        patterns: [
            ...config.patterns,
            {
                name: 'allSagas',
                type: 'saga',
                pattern: /saga.jsx?$/,
            },
        ],
    };
};
