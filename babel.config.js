const plugins = [
    ["@babel/plugin-transform-react-jsx",
    {
      "pragma": "createElement"
    }],
    ["@babel/plugin-transform-modules-commonjs", {
        "allowTopLevelThis": true
    }]   
]