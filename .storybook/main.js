module.exports = {
    stories: [
        "../src/**/*.stories.@(ts|tsx|js|jsx|mdx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/preset-create-react-app",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
            },
        },
        "@storybook/addon-actions",
    ],
};
