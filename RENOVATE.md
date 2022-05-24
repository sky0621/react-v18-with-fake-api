# renovate

## config:base

https://docs.renovatebot.com/presets-config/#configbase
```
    ":dependencyDashboard",
    ":semanticPrefixFixDepsChoreOthers",
    ":ignoreModulesAndTests",
    ":autodetectPinVersions",
    ":prHourlyLimit2",
    ":prConcurrentLimit10",
    "group:monorepos",
    "group:recommended",
    "workarounds:all"
```

### dependencyDashboard

https://docs.renovatebot.com/presets-default/#dependencydashboard

RenovateDependencyDashboardの作成を有効にする

### semanticPrefixFixDepsChoreOthers

https://docs.renovatebot.com/presets-default/#semanticprefixfixdepschoreothers

fixセマンティックコミットが検出された場合は、依存関係およびchoreその他すべてにセマンティックコミットタイプを使用します

### ignoreModulesAndTests

https://docs.renovatebot.com/presets-default/#ignoremodulesandtests

node_modules、、およびさまざまなtest/testsディレクトリを無視します

```
{
  "ignorePaths": [
    "**/node_modules/**",
    "**/bower_components/**",
    "**/vendor/**",
    "**/examples/**",
    "**/__tests__/**",
    "**/test/**",
    "**/tests/**",
    "**/__fixtures__/**"
  ]
}
```

### autodetectPinVersions

https://docs.renovatebot.com/presets-default/#autodetectpinversions

依存関係を固定するか範囲を維持するかを自動検出

### prHourlyLimit2

https://docs.renovatebot.com/presets-default/#prhourlylimit2

PRの作成を1時間あたり最大2つに制限します

### prConcurrentLimit10

https://docs.renovatebot.com/presets-default/#prconcurrentlimit10

いつでも最大10のオープンPRに制限する

### group:monorepos

https://docs.renovatebot.com/presets-group/#groupmonorepos

既知のモノレポパッケージをグループ化する

### group:recommended

https://docs.renovatebot.com/presets-group/#grouprecommended

推奨される非モノレポパッケージグループの厳選されたリストを使用する

### workarounds:all

https://docs.renovatebot.com/presets-workarounds/#workaroundsall

パッケージに関する既知の問題の回避策のコレクション


