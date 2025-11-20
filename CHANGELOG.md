## [10.9.0](https://github.com/neovici/cosmoz-autocomplete/compare/v10.8.0...v10.9.0) (2025-11-20)

### Features

* cosmoz-autocomplete-excluding ([#210](https://github.com/neovici/cosmoz-autocomplete/issues/210)) ([de607f1](https://github.com/neovici/cosmoz-autocomplete/commit/de607f1226f149289b3f9e8be9181e0689c1b971)), closes [#209](https://github.com/neovici/cosmoz-autocomplete/issues/209)

## [10.8.0](https://github.com/neovici/cosmoz-autocomplete/compare/v10.7.2...v10.8.0) (2025-10-24)

### Features

* useProperty value ([17ea59e](https://github.com/neovici/cosmoz-autocomplete/commit/17ea59e3b44c7bddd6a38cab5f1ff51a57df9d28))

## [10.7.2](https://github.com/neovici/cosmoz-autocomplete/compare/v10.7.1...v10.7.2) (2025-09-16)

### Bug Fixes

* keyboard navigation stops working ([75345b0](https://github.com/neovici/cosmoz-autocomplete/commit/75345b09c2a939f6f42fb734add873e5965b17ed))

## [10.7.1](https://github.com/neovici/cosmoz-autocomplete/compare/v10.7.0...v10.7.1) (2025-09-09)

### Bug Fixes

* fatal error when text is undefined ([#204](https://github.com/neovici/cosmoz-autocomplete/issues/204)) ([efeb5df](https://github.com/neovici/cosmoz-autocomplete/commit/efeb5dff206d437bc61a7b9df8ba023b0d863f72))

## [10.7.0](https://github.com/neovici/cosmoz-autocomplete/compare/v10.6.1...v10.7.0) (2025-09-05)

### Features

* adjust opacity for listbox ([#202](https://github.com/neovici/cosmoz-autocomplete/issues/202)) ([f117038](https://github.com/neovici/cosmoz-autocomplete/commit/f1170381493db05aeafe5d2c8641d3776070c90a))

## [10.6.1](https://github.com/neovici/cosmoz-autocomplete/compare/v10.6.0...v10.6.1) (2025-08-30)

### Bug Fixes

* margin is not taken into account when item-size="auto" ([b98c21c](https://github.com/neovici/cosmoz-autocomplete/commit/b98c21c3a467f78d768b2764f93a7f1331e9f81d))

## [10.6.0](https://github.com/neovici/cosmoz-autocomplete/compare/v10.5.0...v10.6.0) (2025-08-30)

### Features

* itemRenderer can access the items list ([488c790](https://github.com/neovici/cosmoz-autocomplete/commit/488c7905b30fe1a9df30d4fbffb84d5e1a1f5485))

### Bug Fixes

* dropdown is not displayed while the source is loading ([b1fda76](https://github.com/neovici/cosmoz-autocomplete/commit/b1fda76e7ab951a58df8c2f09d91add67ae7cf93))
* error in console if listbox is closed before layout completes ([389f86f](https://github.com/neovici/cosmoz-autocomplete/commit/389f86f5478040ef43bf5f382f244a8bda2a1f49))
* listbox closes when focus moves into it ([edbfb60](https://github.com/neovici/cosmoz-autocomplete/commit/edbfb606568c17c298e90cc3b07a1e51fb18df9d))

## [10.5.0](https://github.com/neovici/cosmoz-autocomplete/compare/v10.4.0...v10.5.0) (2025-08-29)

### Features

* open animation ([c8611c4](https://github.com/neovici/cosmoz-autocomplete/commit/c8611c419d044fdb99ae675ddebb20402bd8c900))

### Bug Fixes

* items are not rendered fully ([ceb40c3](https://github.com/neovici/cosmoz-autocomplete/commit/ceb40c33b6006db451cdd5644a17a8e7ba8f8d55))

## [10.4.0](https://github.com/neovici/cosmoz-autocomplete/compare/v10.3.0...v10.4.0) (2025-08-27)

### Features

* expose ItemRendererOpts ([2d1016b](https://github.com/neovici/cosmoz-autocomplete/commit/2d1016b5204590de8f88be5335cf88b43980fb9c))
* external-search attribute ([ca338bd](https://github.com/neovici/cosmoz-autocomplete/commit/ca338bd92c49e5bfb6e824181ccc01f0269737ad))
* itemRenderer also receives the position information ([b8ba73e](https://github.com/neovici/cosmoz-autocomplete/commit/b8ba73ee53de43f5cc3295aeed93b9f31e2f8e11))
* layout-complete event for when items are finished rendering in proper place ([b78985a](https://github.com/neovici/cosmoz-autocomplete/commit/b78985a0c6b0b5c55ceda6e890a102165aa40271))
* support for item-height="auto" ([baec7c2](https://github.com/neovici/cosmoz-autocomplete/commit/baec7c2e8075f07c1fc9b0f0220321abe7fb106f))

### Bug Fixes

* more reliable scroll to selected item ([4383219](https://github.com/neovici/cosmoz-autocomplete/commit/4383219d94f13f4df888d2ad9b5bf0b03bccb7f4))
* sizer in item renderer is useless ([8e25878](https://github.com/neovici/cosmoz-autocomplete/commit/8e25878c408dd44253da3e87b65fc2fa821ffcc5)), closes [packages/labs/virtualizer/src/Virtualizer.ts#L375](https://github.com/packages/labs/virtualizer/src/Virtualizer.ts/issues/L375) [src/listbox/index.ts#L46](https://github.com/src/listbox/index.ts/issues/L46)

## [10.3.0](https://github.com/neovici/cosmoz-autocomplete/compare/v10.2.3...v10.3.0) (2025-08-21)

### Features

* labels styling ([#187](https://github.com/neovici/cosmoz-autocomplete/issues/187)) ([ff9efc2](https://github.com/neovici/cosmoz-autocomplete/commit/ff9efc2e55bb565d1a5bfeb1cfa13409d37d5b9f))

## [10.2.3](https://github.com/neovici/cosmoz-autocomplete/compare/v10.2.2...v10.2.3) (2025-08-19)

### Bug Fixes

* don't show listbox dropdown when there's no value ([#191](https://github.com/neovici/cosmoz-autocomplete/issues/191)) ([430efa3](https://github.com/neovici/cosmoz-autocomplete/commit/430efa3ca3dde5627d67b53eea63ef150db3aa66))

## [10.2.2](https://github.com/neovici/cosmoz-autocomplete/compare/v10.2.1...v10.2.2) (2025-08-05)

### Bug Fixes

* **deps:** bump cosmoz-dropdown 5.3.0 to 6.2.1 ([56e64d2](https://github.com/neovici/cosmoz-autocomplete/commit/56e64d2f5f23cc499337d0bd50915975395d7693))

## [10.2.1](https://github.com/neovici/cosmoz-autocomplete/compare/v10.2.0...v10.2.1) (2025-08-04)

### Bug Fixes

* automerge workflow ([5f24a0b](https://github.com/neovici/cosmoz-autocomplete/commit/5f24a0bc56c65946cc84804bd47cdf32a76eeac2))

## [10.2.0](https://github.com/neovici/cosmoz-autocomplete/compare/v10.1.0...v10.2.0) (2025-07-21)

### Features

* new automerge workflow ([85eda6d](https://github.com/neovici/cosmoz-autocomplete/commit/85eda6d5853e8d2ca26aca5d5263e0c582d1eb86))

## [10.1.0](https://github.com/neovici/cosmoz-autocomplete/compare/v10.0.1...v10.1.0) (2025-07-08)

### Features

* add variables and improve styling ([#186](https://github.com/neovici/cosmoz-autocomplete/issues/186)) ([45e386a](https://github.com/neovici/cosmoz-autocomplete/commit/45e386a6da1dacfb68f241cbf203992c49d18977))

## [10.0.1](https://github.com/neovici/cosmoz-autocomplete/compare/v10.0.0...v10.0.1) (2025-06-23)

### Bug Fixes

- 19206 normalize search and have it accent-insensitive ([bd92b77](https://github.com/neovici/cosmoz-autocomplete/commit/bd92b770f4833e14e6d31b421a42aa1657272593))

## [10.0.0](https://github.com/neovici/cosmoz-autocomplete/compare/v9.0.2...v10.0.0) (2025-01-03)

### ⚠ BREAKING CHANGES

- Update cosmoz-dropdown with floating-ui support

- chore: update

- chore(deps): upgrade

### Features

- update cosmoz-dropdown ([#184](https://github.com/neovici/cosmoz-autocomplete/issues/184)) ([940d96c](https://github.com/neovici/cosmoz-autocomplete/commit/940d96c16c47346cf1d6299e9496a49459a3682a))

## [9.0.2](https://github.com/neovici/cosmoz-autocomplete/compare/v9.0.1...v9.0.2) (2024-11-21)

### Bug Fixes

- select after query ([#182](https://github.com/neovici/cosmoz-autocomplete/issues/182)) ([ed7a1e4](https://github.com/neovici/cosmoz-autocomplete/commit/ed7a1e477894b838f6d23d53e54bb4fc24ba4538)), closes [AB#17933](https://github.com/neovici/AB/issues/17933)

## [9.0.1](https://github.com/neovici/cosmoz-autocomplete/compare/v9.0.0...v9.0.1) (2024-11-20)

### Bug Fixes

- loader looks bad on very narrow inputs ([#181](https://github.com/neovici/cosmoz-autocomplete/issues/181)) ([1445751](https://github.com/neovici/cosmoz-autocomplete/commit/14457517a7380c346fd03000a7d02ef6e889f2dd))

## [9.0.0](https://github.com/neovici/cosmoz-autocomplete/compare/v8.9.2...v9.0.0) (2024-11-20)

### ⚠ BREAKING CHANGES

- property `external` has been removed
- hide-empty has been removed

### Features

- ux improvements ([#180](https://github.com/neovici/cosmoz-autocomplete/issues/180)) ([1ef0817](https://github.com/neovici/cosmoz-autocomplete/commit/1ef0817b85971c9ca3a014da63f2a02abcd56c62)), closes [AB#17850](https://github.com/neovici/AB/issues/17850)

## [8.9.2](https://github.com/neovici/cosmoz-autocomplete/compare/v8.9.1...v8.9.2) (2024-09-20)

### Bug Fixes

- **dependencies:** latest input needed ([c53d8a3](https://github.com/neovici/cosmoz-autocomplete/commit/c53d8a339ec07dc461308461be554fc1f2d389e4))
- **keyframes:** unused keyframes ([c6e3568](https://github.com/neovici/cosmoz-autocomplete/commit/c6e35686124cbd99d5910c38b811d9cdf3eb4aeb))
- **spinner:** bounce effect removed ([9b6b575](https://github.com/neovici/cosmoz-autocomplete/commit/9b6b575c0426b7b5f34bb1de0036372cdca7ba70))

## [8.9.1](https://github.com/neovici/cosmoz-autocomplete/compare/v8.9.0...v8.9.1) (2024-05-23)

### Bug Fixes

- make the sizer take no height ([#173](https://github.com/neovici/cosmoz-autocomplete/issues/173)) ([2e3c3de](https://github.com/neovici/cosmoz-autocomplete/commit/2e3c3de6359c83c99ff1819a7fd205a893a7c024))

## [8.9.0](https://github.com/neovici/cosmoz-autocomplete/compare/v8.8.3...v8.9.0) (2024-05-08)

### Features

- add a new CSS variable for listbox ([b75f043](https://github.com/neovici/cosmoz-autocomplete/commit/b75f04333583eaad7665f2cd0f10b09e361f8d1b))
- add uppercase decorator story ([103f61f](https://github.com/neovici/cosmoz-autocomplete/commit/103f61f4f99a534e8a936378d42787cfff831b8f))

## [8.8.3](https://github.com/neovici/cosmoz-autocomplete/compare/v8.8.2...v8.8.3) (2024-05-02)

### Bug Fixes

- **cosmoz-listbox:** the font family gets reset ([381c03d](https://github.com/neovici/cosmoz-autocomplete/commit/381c03d0773a19d064cd53c83631e66fffa7060a))

## [8.8.2](https://github.com/neovici/cosmoz-autocomplete/compare/v8.8.1...v8.8.2) (2024-05-02)

### Bug Fixes

- **cosmoz-autocomplete:** export part wrap ([6471454](https://github.com/neovici/cosmoz-autocomplete/commit/6471454d13e454326ab32444efddae28844e8958))

## [8.8.1](https://github.com/neovici/cosmoz-autocomplete/compare/v8.8.0...v8.8.1) (2024-04-30)

### Bug Fixes

- the list has too much scroll height when there are few items and extra padding ([#165](https://github.com/neovici/cosmoz-autocomplete/issues/165)) ([40428f6](https://github.com/neovici/cosmoz-autocomplete/commit/40428f673ead5adf61602a1215f65d09070e0a6b))

## [8.8.0](https://github.com/neovici/cosmoz-autocomplete/compare/v8.7.1...v8.8.0) (2024-04-30)

### Features

- **cosmoz-autocomplete:** add css var to hide clear icon ([207a726](https://github.com/neovici/cosmoz-autocomplete/commit/207a72668f799429d235eeb76aac434c30a55238))

### Bug Fixes

- update chip-clear css var after code review commit suggestion ([ad123cd](https://github.com/neovici/cosmoz-autocomplete/commit/ad123cdad5085831b5f53c83702f170f09d4b7d4))

## [8.7.1](https://github.com/neovici/cosmoz-autocomplete/compare/v8.7.0...v8.7.1) (2024-04-19)

### Bug Fixes

- **dependencies:** newest cosmoz input needed in this repo ([ea60c7f](https://github.com/neovici/cosmoz-autocomplete/commit/ea60c7f61ce52ccb0194f40cabd075805d359b09))

## [8.7.0](https://github.com/neovici/cosmoz-autocomplete/compare/v8.6.0...v8.7.0) (2024-04-11)

### Features

- remove portal call ([8800c33](https://github.com/neovici/cosmoz-autocomplete/commit/8800c331ce5b72c78eb5f69fb5a0ba20f8965265))

## [8.6.0](https://github.com/neovici/cosmoz-autocomplete/compare/v8.5.0...v8.6.0) (2024-04-10)

### Features

- add `package-lock.json` file ([1016f85](https://github.com/neovici/cosmoz-autocomplete/commit/1016f8565e8162ecbee9b97ffd6c105abfa2ea53))
- make tests pass in both browsers ([f357e23](https://github.com/neovici/cosmoz-autocomplete/commit/f357e231fb5e51e7bc4c7a87b9dc7f22a3c8729e))
- update `cosmoz-dropdown` dependency ([bc952fb](https://github.com/neovici/cosmoz-autocomplete/commit/bc952fba7267067d68e4ac990ac1b50f37888d5d))
- use popover for cosmoz-listbox ([c977f5d](https://github.com/neovici/cosmoz-autocomplete/commit/c977f5dfe9cbc77f7a048d4932878fe9cf8868c2))

## [8.5.0](https://github.com/neovici/cosmoz-autocomplete/compare/v8.4.0...v8.5.0) (2024-04-01)

### Features

- rearrange repo and update storybook ([579abe9](https://github.com/neovici/cosmoz-autocomplete/commit/579abe933315d615cb1ad82797a2d8f810ec8855))

## [8.4.0](https://github.com/neovici/cosmoz-autocomplete/compare/v8.3.0...v8.4.0) (2024-03-22)

### Features

- var for chip translate y amount ([2679182](https://github.com/neovici/cosmoz-autocomplete/commit/2679182772a1697ea5a5795adf038895fb58602b))

## [8.3.0](https://github.com/neovici/cosmoz-autocomplete/compare/v8.2.0...v8.3.0) (2024-03-21)

### Features

- adjust workflow ([ebecbb1](https://github.com/neovici/cosmoz-autocomplete/commit/ebecbb128f3efdc36c6ae1d91fba574b74a69794))

## [8.2.0](https://github.com/neovici/cosmoz-autocomplete/compare/v8.1.0...v8.2.0) (2024-03-21)

### Features

- deploy storybook-static ([6c9f866](https://github.com/neovici/cosmoz-autocomplete/commit/6c9f866477fa538b47ac17dc0902ed3a3881d3a5))
- preview prs ([7451f16](https://github.com/neovici/cosmoz-autocomplete/commit/7451f16e03c136a58d3d279b491378e65455cea7))
- update preview ([fbaddc2](https://github.com/neovici/cosmoz-autocomplete/commit/fbaddc2113101f9d6d81cfef6e0850724daa6433))

## [8.1.0](https://github.com/neovici/cosmoz-autocomplete/compare/v8.0.0...v8.1.0) (2024-03-18)

### Features

- min and preserve-order modifiers to make it more similar to select ([2425a42](https://github.com/neovici/cosmoz-autocomplete/commit/2425a428f831c21b050f87774084e6782309e91e))

### Bug Fixes

- chip has text cursor even though text is not selectable ([0157f9d](https://github.com/neovici/cosmoz-autocomplete/commit/0157f9d4113f4fbdb64d5798b87f0f3dd0b83a07))
- use adopted stylesheets instead of style tags ([b6bc700](https://github.com/neovici/cosmoz-autocomplete/commit/b6bc700f45b1aa93af92410cebf3d6ae86421942))

## [8.0.0](https://github.com/neovici/cosmoz-autocomplete/compare/v7.10.0...v8.0.0) (2024-01-11)

### ⚠ BREAKING CHANGES

- Update to @pionjs/pion

### Features

- update to pion ([d367046](https://github.com/neovici/cosmoz-autocomplete/commit/d367046bb9e01d4b518f340365eb30f664b1b99c))

## [7.10.0](https://github.com/neovici/cosmoz-autocomplete/compare/v7.9.0...v7.10.0) (2023-11-02)

### Features

- upgrade deps ([22578e8](https://github.com/neovici/cosmoz-autocomplete/commit/22578e81d416d8ff36bfc5c30c7deb614bba0e12))

## [7.9.0](https://github.com/neovici/cosmoz-autocomplete/compare/v7.8.0...v7.9.0) (2023-10-19)

### Features

- **autocomplete:** handle falsy source ([c3d41f5](https://github.com/neovici/cosmoz-autocomplete/commit/c3d41f5dcf243a0b7e82523e69e0194b95d979b2))

## [7.8.0](https://github.com/neovici/cosmoz-autocomplete/compare/v7.7.0...v7.8.0) (2023-08-10)

### Features

- add focus function to autocomplete ([e8c39f1](https://github.com/neovici/cosmoz-autocomplete/commit/e8c39f10419535150fc504775ecf526ef733412e))
- add useImperativeApi focus to autocomplete ([5429cc2](https://github.com/neovici/cosmoz-autocomplete/commit/5429cc236f4d3c3083344b66ebf27f58ae59d1af))

## [7.7.0](https://github.com/neovici/cosmoz-autocomplete/compare/v7.6.1...v7.7.0) (2023-07-20)

### Features

- **listbox:** hide item overflow ([2e0ccc5](https://github.com/neovici/cosmoz-autocomplete/commit/2e0ccc5fda757d022987cd023063d4801f2688d7))

## [7.6.1](https://github.com/neovici/cosmoz-autocomplete/compare/v7.6.0...v7.6.1) (2023-07-20)

### Bug Fixes

- **selection:** handle undefined value in selection ([7f5845e](https://github.com/neovici/cosmoz-autocomplete/commit/7f5845e78d14ab7825f94d766cb60c15d26cfa3e))

## [7.6.0](https://github.com/neovici/cosmoz-autocomplete/compare/v7.5.1...v7.6.0) (2023-06-26)

### Features

- **autocomplete:** maintain query case ([c69ea4b](https://github.com/neovici/cosmoz-autocomplete/commit/c69ea4b9f4f5d063d1b033e713f6b24931c0957b))

## [7.5.1](https://github.com/neovici/cosmoz-autocomplete/compare/v7.5.0...v7.5.1) (2023-06-15)

### Bug Fixes

- value-property attribute is not observed ([ca96936](https://github.com/neovici/cosmoz-autocomplete/commit/ca969362dcabb9751b58f18367179ae94a77c8e9))

## [7.5.0](https://github.com/neovici/cosmoz-autocomplete/compare/v7.4.1...v7.5.0) (2023-06-13)

### Features

- **autocomplete:** restore keep-oepened & keep-query ([2d9f161](https://github.com/neovici/cosmoz-autocomplete/commit/2d9f1618d2af2d1495557015d2a66c4934c58eea))

## [7.4.1](https://github.com/neovici/cosmoz-autocomplete/compare/v7.4.0...v7.4.1) (2023-05-24)

### Bug Fixes

- chips no longer hovering other omnitable fields ([b1af256](https://github.com/neovici/cosmoz-autocomplete/commit/b1af256525d0c5c24dbb819657f518b49abfaf2a))

## [7.4.0](https://github.com/neovici/cosmoz-autocomplete/compare/v7.3.0...v7.4.0) (2023-05-16)

### Features

- **input:** export input's control part ([198fa5f](https://github.com/neovici/cosmoz-autocomplete/commit/198fa5fbe7fce655f05fe9f9aee438d2bd58c1a1))

## [7.3.0](https://github.com/neovici/cosmoz-autocomplete/compare/v7.2.0...v7.3.0) (2023-05-16)

### Features

- **input:** hide input only when single ([df49b24](https://github.com/neovici/cosmoz-autocomplete/commit/df49b245470c282f5a59b922f20eaf46dd912614))

## [7.2.0](https://github.com/neovici/cosmoz-autocomplete/compare/v7.1.0...v7.2.0) (2023-04-28)

### Features

- adjust tests ([1d61916](https://github.com/neovici/cosmoz-autocomplete/commit/1d61916c25ed685d8eb3c2284919a64543330b65))
- auto-close & auto-clear ([0af9cb1](https://github.com/neovici/cosmoz-autocomplete/commit/0af9cb19284072843f2e8d4f172c88d89a860d24))

## [7.1.0](https://github.com/neovici/cosmoz-autocomplete/compare/v7.0.0...v7.1.0) (2023-04-28)

### Features

- **autocomplete:** implement wrap ([93905db](https://github.com/neovici/cosmoz-autocomplete/commit/93905db3feed7f6a649014f2088230daf20e5af9))

## [7.0.0](https://github.com/neovici/cosmoz-autocomplete/compare/v6.4.0...v7.0.0) (2023-04-27)

### ⚠ BREAKING CHANGES

- **autocomplete:** Show multiple chips on the same rows before input.
  Collapse chips that don't fit into a numbered badge.

### Features

- adjust spacing ([e436a76](https://github.com/neovici/cosmoz-autocomplete/commit/e436a763da0655fc7f2e81a05fc697cfdf0bfea0))
- **autocomplete:** multiple chips ([0d07c62](https://github.com/neovici/cosmoz-autocomplete/commit/0d07c6290c345c2e5797d25720eb621a552d70c0))
- set title per chip ([2a79d47](https://github.com/neovici/cosmoz-autocomplete/commit/2a79d4786f5c8d791f23f29d9d80fa14e1587a8f))

### Bug Fixes

- **autocomplete:** correct focus style ([7ad8c3a](https://github.com/neovici/cosmoz-autocomplete/commit/7ad8c3ac9c3d0ab4ea67038a21724fad69d26d7b))
- cleanup styles ([2218da1](https://github.com/neovici/cosmoz-autocomplete/commit/2218da1f95d997c2d8914d7fb02dac7d3cc925f6))

## [6.4.0](https://github.com/neovici/cosmoz-autocomplete/compare/v6.3.0...v6.4.0) (2023-04-20)

### Features

- pass text property to textual ([fdeac18](https://github.com/neovici/cosmoz-autocomplete/commit/fdeac187742b6655d243f896e526d739efc3c264))

## [6.3.0](https://github.com/neovici/cosmoz-autocomplete/compare/v6.2.0...v6.3.0) (2023-04-20)

### Features

- **textual:** configurable autocomplete textual ([317c733](https://github.com/neovici/cosmoz-autocomplete/commit/317c733b8eba91f3776c309ac476b553af4e6c69))

## [6.2.0](https://github.com/neovici/cosmoz-autocomplete/compare/v6.1.0...v6.2.0) (2023-04-20)

### Features

- update ts ([dbe80c2](https://github.com/neovici/cosmoz-autocomplete/commit/dbe80c21db7305e5d74a460f6f0fe66eb411d3d9))

## [6.1.0](https://github.com/neovici/cosmoz-autocomplete/compare/v6.0.0...v6.1.0) (2023-03-31)

### Features

- upgrade cosmoz-dropdown ([2571f11](https://github.com/neovici/cosmoz-autocomplete/commit/2571f1188d4c166bdbe2de75d821031254ff36a1))

## [6.0.0](https://github.com/neovici/cosmoz-autocomplete/compare/v5.3.2...v6.0.0) (2023-03-16)

### ⚠ BREAKING CHANGES

- **ts:** convert to ts and adjust exports

### Features

- **listbox:** convert to ts ([f3c75a9](https://github.com/neovici/cosmoz-autocomplete/commit/f3c75a91993578b8fe66ad3ba2d6bd9ef0cc20cc))
- **listbox:** passthru ([3934c00](https://github.com/neovici/cosmoz-autocomplete/commit/3934c00678d4ac49bbde95bb9f24241cc1c63de2))
- rewrite in ts ([a0b7472](https://github.com/neovici/cosmoz-autocomplete/commit/a0b7472101162bfb14060a4689ea4374ffe9b302))
- **selection|chips:** refactor params ([b016224](https://github.com/neovici/cosmoz-autocomplete/commit/b016224d19c909c02ec34c656b52a77b2b5f6a03))
- **ts:** build ([f38c867](https://github.com/neovici/cosmoz-autocomplete/commit/f38c86761653eea57ba37ff444b08637500b53cd))
- **ts:** convert and adjust exports ([7bc0951](https://github.com/neovici/cosmoz-autocomplete/commit/7bc095177b1bb21eaea7f90732c814fc7b2fa48a))

## [5.3.2](https://github.com/neovici/cosmoz-autocomplete/compare/v5.3.1...v5.3.2) (2023-03-13)

### Bug Fixes

- **listbox:** memoize virtulizer layout config ([6540fea](https://github.com/neovici/cosmoz-autocomplete/commit/6540fea2cd65f1a291d58f8ecbcd4e9d3e3b73df))

## [5.3.1](https://github.com/neovici/cosmoz-autocomplete/compare/v5.3.0...v5.3.1) (2023-03-13)

### Bug Fixes

- **autocomplete:** hide placeholder if autocomplete has one value ([c46aa4a](https://github.com/neovici/cosmoz-autocomplete/commit/c46aa4aeb822044fa51483661381eb524239e509))

## [5.3.0](https://github.com/neovici/cosmoz-autocomplete/compare/v5.2.0...v5.3.0) (2023-03-07)

### Features

- **use-listbox:** add `scroll` prop to position ([53bde4c](https://github.com/neovici/cosmoz-autocomplete/commit/53bde4c53041deea95468e66b3963cb13de2a79a))
- **virtualizer:** update usage ([dc96e18](https://github.com/neovici/cosmoz-autocomplete/commit/dc96e1890a7326c06d54e356a3f03270efd2129f))

### Bug Fixes

- cleanup ([b69f99d](https://github.com/neovici/cosmoz-autocomplete/commit/b69f99dae0750858b81ba7cb21bbdafae7eb8cfe))

## [5.2.0](https://github.com/neovici/cosmoz-autocomplete/compare/v5.1.3...v5.2.0) (2023-02-22)

### Features

- **autocomplete:** add more css vars to style chips ([5d7d424](https://github.com/neovici/cosmoz-autocomplete/commit/5d7d4248a1a5575746bdb1fe8cc030f8cbf954d6))

## [5.1.3](https://github.com/neovici/cosmoz-autocomplete/compare/v5.1.2...v5.1.3) (2023-01-12)

### Bug Fixes

- **autocomplete:** prevent autocomplete spinner from flexing ([3b2daba](https://github.com/neovici/cosmoz-autocomplete/commit/3b2dabaad3715c56b65f9a570c515c3be950d130))

## [5.1.2](https://github.com/neovici/cosmoz-autocomplete/compare/v5.1.1...v5.1.2) (2023-01-07)

### Bug Fixes

- **item-renderer:** measure the rendered content ([ca6caaa](https://github.com/neovici/cosmoz-autocomplete/commit/ca6caaa57b4e6d67ebbdc35fc0c9ff7d52a1c210))

## [5.1.1](https://github.com/neovici/cosmoz-autocomplete/compare/v5.1.0...v5.1.1) (2023-01-07)

### Bug Fixes

- **autocomplete:** get keep-opened from props ([800677e](https://github.com/neovici/cosmoz-autocomplete/commit/800677e673e7445dc728bdef5e25fcc4af68b826))

## [5.1.0](https://github.com/neovici/cosmoz-autocomplete/compare/v5.0.0...v5.1.0) (2023-01-07)

### Features

- allow composing item renderer ([3ebb9fa](https://github.com/neovici/cosmoz-autocomplete/commit/3ebb9fad559d43c7d8c4cf35902105dff22273ae))

### Bug Fixes

- correctly pass down itemRenderer to listbox ([b7c0c98](https://github.com/neovici/cosmoz-autocomplete/commit/b7c0c985082fba39e3f3f15d6ab139693c5f3f6d))
- when ([c838c0f](https://github.com/neovici/cosmoz-autocomplete/commit/c838c0fed5ab6049b388ba042bb3c16168ba6f31))

## [5.0.0](https://github.com/neovici/cosmoz-autocomplete/compare/v4.0.0...v5.0.0) (2022-07-19)

### ⚠ BREAKING CHANGES

- **deps:** Upgrade to cosmoz-utils v5

### Features

- **deps:** upgrade to cosmoz-utils@5 ([94b5ab2](https://github.com/neovici/cosmoz-autocomplete/commit/94b5ab2ee0a23530f069fe5a756316a10a8fd7df))

## [4.0.0](https://github.com/neovici/cosmoz-autocomplete/compare/v3.2.0...v4.0.0) (2022-06-21)

### ⚠ BREAKING CHANGES

- Upgrade to latest lit & haunted

### Features

- upgrade to latest lit ([a7fd0d3](https://github.com/neovici/cosmoz-autocomplete/commit/a7fd0d39b2103cb53ca13dbe7ea0a036522bb837))

### Bug Fixes

- **cosmoz-listbox:** handle missing 0 index style ([8f08923](https://github.com/neovici/cosmoz-autocomplete/commit/8f08923ca3a441ae0a2b3e15d2cf36b68997387a))

## [4.0.0-beta.2](https://github.com/neovici/cosmoz-autocomplete/compare/v4.0.0-beta.1...v4.0.0-beta.2) (2022-06-21)

### Bug Fixes

- **cosmoz-listbox:** handle missing 0 index style ([8f08923](https://github.com/neovici/cosmoz-autocomplete/commit/8f08923ca3a441ae0a2b3e15d2cf36b68997387a))

## [4.0.0-beta.1](https://github.com/neovici/cosmoz-autocomplete/compare/v3.2.0...v4.0.0-beta.1) (2022-06-10)

### ⚠ BREAKING CHANGES

- Upgrade to latest lit & haunted

### Features

- upgrade to latest lit ([a7fd0d3](https://github.com/neovici/cosmoz-autocomplete/commit/a7fd0d39b2103cb53ca13dbe7ea0a036522bb837))

## [3.2.0](https://github.com/neovici/cosmoz-autocomplete/compare/v3.1.1...v3.2.0) (2022-06-06)

### Features

- **autocomplete:** add badge clear ([16c367b](https://github.com/neovici/cosmoz-autocomplete/commit/16c367b3d7af72b812f3f46f17ef1fae94a4ecf9))

### [3.1.1](https://github.com/neovici/cosmoz-autocomplete/compare/v3.1.0...v3.1.1) (2022-04-14)

### Bug Fixes

- **listbox:** display the svg check mark ([70719cc](https://github.com/neovici/cosmoz-autocomplete/commit/70719cc3fd570b2962e9283ea8b301320e519804))

## [3.1.0](https://github.com/neovici/cosmoz-autocomplete/compare/v3.0.3...v3.1.0) (2022-04-12)

### Features

- **use-autocomplete:** allow overriding onSelect ([178da61](https://github.com/neovici/cosmoz-autocomplete/commit/178da618e7f7816294ccf71038f9f8f8df53fe83))

### Bug Fixes

- **listbox:** correct multi style ([368b22a](https://github.com/neovici/cosmoz-autocomplete/commit/368b22a41c65d1d1f53768ca6a7bdb5c6f0543b4))

### [3.0.3](https://github.com/neovici/cosmoz-autocomplete/compare/v3.0.2...v3.0.3) (2022-04-08)

### Bug Fixes

- **autocomplete:** remove one chip max-width ([3b8bb99](https://github.com/neovici/cosmoz-autocomplete/commit/3b8bb997f5755fe071046ede0b2cba2c05a76fe7))

### [3.0.2](https://github.com/neovici/cosmoz-autocomplete/compare/v3.0.1...v3.0.2) (2022-04-05)

### Bug Fixes

- **autocomplete:** limit chip width ([af3b98b](https://github.com/neovici/cosmoz-autocomplete/commit/af3b98b9b4ad376fc363227cbec8806a42daf242))
- **autocomplete:** show one chip ([c2e87c6](https://github.com/neovici/cosmoz-autocomplete/commit/c2e87c6dce431467423444b9e587d14876e40033))

### [3.0.1](https://github.com/neovici/cosmoz-autocomplete/compare/v3.0.0...v3.0.1) (2022-03-31)

### Bug Fixes

- **listbox:** better auto sizing ([6f54c9c](https://github.com/neovici/cosmoz-autocomplete/commit/6f54c9c115b85c0d1bcfd273b13720941bb3e579))

## [3.0.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.17.2...v3.0.0) (2022-03-31)

### ⚠ BREAKING CHANGES

- **autocomplete:** display badge instead of chips

### Features

- **autocomplete:** close by default, keeep-query, keep-opened ([851492d](https://github.com/neovici/cosmoz-autocomplete/commit/851492d19f3f85d11f0bf390dea12fab605dca68))
- **autocomplete:** display badge instead of chips ([fd4581e](https://github.com/neovici/cosmoz-autocomplete/commit/fd4581e45d12d23d84b2ba8b5afc7d7360fd7cb2))
- use-focus & use-position from cosmoz-dropdown ([2f419b8](https://github.com/neovici/cosmoz-autocomplete/commit/2f419b8904f5d105b7800601cc378b960addb8f6))

### Bug Fixes

- correct imports ([cae949a](https://github.com/neovici/cosmoz-autocomplete/commit/cae949a40cae4f75c29890a44b5297c55c1aa5d3))

### [2.17.2](https://github.com/neovici/cosmoz-autocomplete/compare/v2.17.1...v2.17.2) (2021-12-22)

### Bug Fixes

- **cosmoz-listbox:** fix white-sapce at the end of the list ([fbc77b1](https://github.com/neovici/cosmoz-autocomplete/commit/fbc77b1bc43885f65a9968346d4f5973b9bca23f))

### [2.17.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.17.0...v2.17.1) (2021-10-08)

### Bug Fixes

- **lib/use-focus:** iosSupport for onToggle ([9d5e525](https://github.com/neovici/cosmoz-autocomplete/commit/9d5e5255b2b0c8100a8430922c2e819547ca66fa))

## [2.17.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.16.0...v2.17.0) (2021-09-07)

### Features

- **use-focus:** add toggle ([d9dd7ac](https://github.com/neovici/cosmoz-autocomplete/commit/d9dd7acd0d8793485258701958a2c20c679ec8b6))

## [2.16.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.15.1...v2.16.0) (2021-08-24)

### Features

- **use-focus:** implement ([9bafcb2](https://github.com/neovici/cosmoz-autocomplete/commit/9bafcb2da66d04653cef1b1df11fe61ad3b99641))
- **use-position:** separate use-position hook ([c0c0249](https://github.com/neovici/cosmoz-autocomplete/commit/c0c0249942f630274b5c2e8687b3cd5950bab4d7))

### [2.15.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.15.0...v2.15.1) (2021-06-23)

### Bug Fixes

- **listbox:** improve scrolling and selection ([e4f32c6](https://github.com/neovici/cosmoz-autocomplete/commit/e4f32c66a1a8b408e1299c379c03a1117e93a6b3))

## [2.15.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.14.0...v2.15.0) (2021-06-14)

### Features

- **cosmoz-autocomplete:** implement show-single and show-selection ([3c0ab63](https://github.com/neovici/cosmoz-autocomplete/commit/3c0ab6396a465da1aa2bcd6b7d7d92eeed16b737))
- **cosmoz-select:** initial implementation ([9f080c6](https://github.com/neovici/cosmoz-autocomplete/commit/9f080c66aabe83614517ebb648dc8317e0e914c7))

### Bug Fixes

- **autocomplete:** close on Escape ([394b7bb](https://github.com/neovici/cosmoz-autocomplete/commit/394b7bb547ff2d3937f0afa15c8f36e7a20e7dae))
- **cosmoz-suggestions:** pass itemHeight and itemLimit to cosmoz-suggestions ([8140da9](https://github.com/neovici/cosmoz-autocomplete/commit/8140da9fe6c276b2f88bf51b50bbd5d719d48b5f))

## [2.14.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.13.1...v2.14.0) (2021-05-28)

### Features

- valueProperty support ([11586de](https://github.com/neovici/cosmoz-autocomplete/commit/11586de63f30cebd05ece17f3b1c1e3eb14819c7))

### [2.13.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.13.0...v2.13.1) (2021-04-09)

### Bug Fixes

- **use-suggestions:** do not change defaultIndex for less than 1 item ([ceb2ce3](https://github.com/neovici/cosmoz-autocomplete/commit/ceb2ce30866624caa41ee547fc0a59f2d15b9a58))

## [2.13.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.12.1...v2.13.0) (2021-03-14)

### Features

- **ci:** nix flake init ([d0c9da5](https://github.com/neovici/cosmoz-autocomplete/commit/d0c9da56a3c1ebc30338f3ac3f463a8abd4c9bf4))
- **ci:** remove karma and cleanup ([aa8b59d](https://github.com/neovici/cosmoz-autocomplete/commit/aa8b59dae2368c3848f5f8a496cb4c05699afc90))

### Bug Fixes

- **ci:** add codecov badge ([f6d9ca4](https://github.com/neovici/cosmoz-autocomplete/commit/f6d9ca4a215a1dd3ac3a23c6653ff607fb85ff92))

### [2.12.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.12.0...v2.12.1) (2021-03-12)

### Bug Fixes

- **use-suggestions:** reset defaultIndex only when we have query and less than 2 results ([a77e93c](https://github.com/neovici/cosmoz-autocomplete/commit/a77e93cc9d23f7d8c1b761d97d3b177cf18476c1))

## [2.12.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.11.2...v2.12.0) (2021-02-19)

### Features

- **autocomplete:** support function and/or Promise source ([a6e7d83](https://github.com/neovici/cosmoz-autocomplete/commit/a6e7d830bfbdcc5cab6a44fa0893e293f3fc0cb1)), closes [#96](https://github.com/neovici/cosmoz-autocomplete/issues/96)

### [2.11.2](https://github.com/neovici/cosmoz-autocomplete/compare/v2.11.1...v2.11.2) (2021-02-09)

### Bug Fixes

- export line and error parts from input ([2572c60](https://github.com/neovici/cosmoz-autocomplete/commit/2572c60b00dc0a2fa98b304e7373bd9362094af4))

### [2.11.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.11.0...v2.11.1) (2021-02-05)

### Bug Fixes

- improve default-index ([764cc95](https://github.com/neovici/cosmoz-autocomplete/commit/764cc9531cd0e1d6030b6364760a0c291fba6096))

## [2.11.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.10.0...v2.11.0) (2021-02-05)

### Features

- **suggesions:** add support for default-index(defaultIndex) ([64eee11](https://github.com/neovici/cosmoz-autocomplete/commit/64eee116f6c8e456c738b8e251c3c7f7c1033ad3))

## [2.10.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.9.1...v2.10.0) (2021-02-05)

### Features

- **autocomplete:** implement showing suggestions on up/down when hideEmpty ([289c210](https://github.com/neovici/cosmoz-autocomplete/commit/289c21050cf7f48946cf7477518eecf6dfdb8ca0))

### [2.9.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.9.0...v2.9.1) (2021-01-28)

### Bug Fixes

- use-keyboard event handling ([8daf0c0](https://github.com/neovici/cosmoz-autocomplete/commit/8daf0c081d1c44d4338903fe6f271404e6750cd1))

## [2.9.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.8.1...v2.9.0) (2021-01-27)

### Features

- **autocomplete:** adds hide-empty to hide suggestions when query is empty ([361be88](https://github.com/neovici/cosmoz-autocomplete/commit/361be88073973dd037a1bce2495041edc9221c1c)), closes [#87](https://github.com/neovici/cosmoz-autocomplete/issues/87)

### [2.8.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.8.0...v2.8.1) (2021-01-26)

### Bug Fixes

- correct limit is one check ([403a85d](https://github.com/neovici/cosmoz-autocomplete/commit/403a85dad1e213fa6f3a05396f4402c8e55accbf))

## [2.8.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.5...v2.8.0) (2021-01-26)

### Features

- **autocomplete:** allow typing on top of limited(1) input ([f7e97d0](https://github.com/neovici/cosmoz-autocomplete/commit/f7e97d0314c1c71c102e9a428c8d0ffba36a7bf0))
- **cosmoz-autocomplete:** replace paper-input with cosmoz-input ([4806c83](https://github.com/neovici/cosmoz-autocomplete/commit/4806c83199f9559160309374f15cc70b4cf8cc3f))
- **cosmoz-input:** implementation ([59989eb](https://github.com/neovici/cosmoz-autocomplete/commit/59989eb143a775e32f7c564377547d68c1898c2c))

### Bug Fixes

- switch to cosmoz-input ([ac27335](https://github.com/neovici/cosmoz-autocomplete/commit/ac273359b3178fd8874e0010b56b52edc8395a7d))

### [2.7.5](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.4...v2.7.5) (2020-12-18)

### Bug Fixes

- **autocomplete:** prevent clearing input on backspace press if disabled ([e58c988](https://github.com/neovici/cosmoz-autocomplete/commit/e58c988baf30dd43c336c91c2cd0ecd8f336f586))

### [2.7.4](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.3...v2.7.4) (2020-12-14)

### Bug Fixes

- change state to props to fix changed events ([9aa6fd9](https://github.com/neovici/cosmoz-autocomplete/commit/9aa6fd96c74ec365f7f794e14be46629eb34c6c9))

### [2.7.3](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.2...v2.7.3) (2020-11-19)

### Bug Fixes

- use input as anchor for suggestions ([990cde5](https://github.com/neovici/cosmoz-autocomplete/commit/990cde5d03ea805190563571cd47fb7e4e5b71e4))

### [2.7.2](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.1...v2.7.2) (2020-11-18)

### Bug Fixes

- add limit, text-property to observed attributes ([2093313](https://github.com/neovici/cosmoz-autocomplete/commit/2093313bd82a296c7d995607e548ab280505b4fc))

### [2.7.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.7.0...v2.7.1) (2020-11-11)

### Bug Fixes

- add text and value events ([271a96c](https://github.com/neovici/cosmoz-autocomplete/commit/271a96cb0fb6e1bd05eb672d00da347ea7ddde39))

## [2.7.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.6.0...v2.7.0) (2020-11-09)

### Features

- when items or query changes reset index to 0 instead of undefined ([d0d440f](https://github.com/neovici/cosmoz-autocomplete/commit/d0d440faf02d3872798e2f6907c97eb4e0023177))

## [2.6.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.5.0...v2.6.0) (2020-11-09)

### Features

- adds confinement and placement support ([567a4c3](https://github.com/neovici/cosmoz-autocomplete/commit/567a4c355036606b670e775243d33c5d6edb56d5))

### Bug Fixes

- don't blur autocomplete on select ([42fd2e8](https://github.com/neovici/cosmoz-autocomplete/commit/42fd2e83c30aee10ee1bf868eb020f0822823c0c))
- **autocomplete:** adds input, chip, chip-text, chip-clear parts ([cdf4320](https://github.com/neovici/cosmoz-autocomplete/commit/cdf432033d6734be0e678ec774447848eb672a62))

## [2.5.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.10...v2.5.0) (2020-11-02)

### Features

- render suggestions in a portal ([cbc199e](https://github.com/neovici/cosmoz-autocomplete/commit/cbc199e9da71daa6715c5911fbbb87cde1883980)), closes [#73](https://github.com/neovici/cosmoz-autocomplete/issues/73)

### [2.4.10](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.9...v2.4.10) (2020-10-21)

### Bug Fixes

- paper-input slot styling on Safari ([05e3356](https://github.com/neovici/cosmoz-autocomplete/commit/05e33566c7c6d736da6e1bfcac3f98cd99475ea5))

### [2.4.9](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.8...v2.4.9) (2020-08-27)

### Bug Fixes

- sets initial sizer on mount ([d823ea3](https://github.com/neovici/cosmoz-autocomplete/commit/d823ea3759d17b1e97a0ba757d6dc659536fa070)), closes [#67](https://github.com/neovici/cosmoz-autocomplete/issues/67)

### [2.4.8](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.7...v2.4.8) (2020-07-30)

### Bug Fixes

- use functional utils from @neovici/cosmoz-utils ([7cdd283](https://github.com/neovici/cosmoz-autocomplete/commit/7cdd2839fc0af66a4c2003854fbcb1da55d9af39))

### [2.4.7](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.6...v2.4.7) (2020-07-28)

### Bug Fixes

- display suggestions using position fixed ([a09f3cb](https://github.com/neovici/cosmoz-autocomplete/commit/a09f3cb849a6ae2e1076322d1f88db9272fb936b))

### [2.4.6](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.5...v2.4.6) (2020-06-16)

### Bug Fixes

- **autocomplete:** hide suggestions if disabled ([c658dd8](https://github.com/neovici/cosmoz-autocomplete/commit/c658dd80bd91fda06289b881dee6cb75bac9dd8e))
- **autocomplete:** replace iron-icon with inline svg ([8333a4e](https://github.com/neovici/cosmoz-autocomplete/commit/8333a4e6db7912f88fc53a4f296ab11d30b28d3b))

### [2.4.5](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.4...v2.4.5) (2020-05-21)

### Bug Fixes

- **suggestions:** handles onEnter without highlight/selection ([f341101](https://github.com/neovici/cosmoz-autocomplete/commit/f341101ad8ca3d27ebfcc7e8b7025e7adbaed652)), closes [#59](https://github.com/neovici/cosmoz-autocomplete/issues/59)

### [2.4.4](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.3...v2.4.4) (2020-05-21)

### Bug Fixes

- **autocomplete:** better ui for single selection ([d185ad1](https://github.com/neovici/cosmoz-autocomplete/commit/d185ad13674b7fe96cac95b3689f969c6769efa0)), closes [#57](https://github.com/neovici/cosmoz-autocomplete/issues/57)

### [2.4.3](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.2...v2.4.3) (2020-05-15)

### Bug Fixes

- **autocomplete:** correct paper-input attributes binding ([480b7a6](https://github.com/neovici/cosmoz-autocomplete/commit/480b7a6ef8634cde61b23a8f95a4e29a280fcf5d)), closes [#53](https://github.com/neovici/cosmoz-autocomplete/issues/53)
- **suggestions:** don't compute sizer when range is undefined ([d4e6613](https://github.com/neovici/cosmoz-autocomplete/commit/d4e6613d7a444e01aa1f06319b8325aff8936f6b))
- **suggestions:** rangechange infinite loop ([508e632](https://github.com/neovici/cosmoz-autocomplete/commit/508e6327512e30b5f035f1f5bac1764429501a4e)), closes [#52](https://github.com/neovici/cosmoz-autocomplete/issues/52)

### [2.4.2](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.1...v2.4.2) (2020-05-12)

### Bug Fixes

- **mark:** handle special chars in mark ([059c4b4](https://github.com/neovici/cosmoz-autocomplete/commit/059c4b46dd87ffb7f5e1370a8395704951b105dd)), closes [#50](https://github.com/neovici/cosmoz-autocomplete/issues/50)

### [2.4.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.4.0...v2.4.1) (2020-05-07)

### Bug Fixes

- improves autosize and external behavior ([64bce1a](https://github.com/neovici/cosmoz-autocomplete/commit/64bce1afdadfd79496659f8ae2080df27d1c7818))

## [2.4.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.3.1...v2.4.0) (2020-05-06)

### Features

- refactor exposing text, onText and external ([20f5dfb](https://github.com/neovici/cosmoz-autocomplete/commit/20f5dfb21f2a658e28d6b4fbda8cb86e8033a526))

### Bug Fixes

- add strProp ([3571d2a](https://github.com/neovici/cosmoz-autocomplete/commit/3571d2a0f4b7f4c67e3bbb39c4c7867d3fd8ac4a))
- autosize suggestions ([2fc406d](https://github.com/neovici/cosmoz-autocomplete/commit/2fc406d36dc1d7d8ba0c1619a2c2571d22ebaa0a))

### [2.3.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.3.0...v2.3.1) (2020-05-05)

### Bug Fixes

- handle undefined in utils search ([6bffa91](https://github.com/neovici/cosmoz-autocomplete/commit/6bffa910b15f17f7ec1da30b04f8db73aec6e2cf))

## [2.3.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.2.3...v2.3.0) (2020-05-04)

### Features

- adds onFocusChange ([3de918e](https://github.com/neovici/cosmoz-autocomplete/commit/3de918e6ee8f96a3108cd8ede11654d252bfe266))

### Bug Fixes

- **test:** adds someFrames ([dcc8f58](https://github.com/neovici/cosmoz-autocomplete/commit/dcc8f5846cddf1c55d5cf4147c4f6956f598da9b))
- update reduce and action usage ([6e174ab](https://github.com/neovici/cosmoz-autocomplete/commit/6e174aba2502cb540d9a9ab12f903a7345094533))
- **deps:** use correct caret version for paper-\* elements ([cf7ef79](https://github.com/neovici/cosmoz-autocomplete/commit/cf7ef798fce111e85b0723286d13e40738afedec))

### [2.2.3](https://github.com/neovici/cosmoz-autocomplete/compare/v2.2.2...v2.2.3) (2020-04-28)

### Bug Fixes

- adds suggestionsWidth property ([a229453](https://github.com/neovici/cosmoz-autocomplete/commit/a229453241c42aaa40b4b32245f03d4c47d3afec))

### [2.2.2](https://github.com/neovici/cosmoz-autocomplete/compare/v2.2.1...v2.2.2) (2020-04-27)

### Bug Fixes

- unarray value on select if limit is 1 ([aaca081](https://github.com/neovici/cosmoz-autocomplete/commit/aaca08150f078ef75087b57d7f30a920ade29288))

### [2.2.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.2.0...v2.2.1) (2020-04-24)

### Bug Fixes

- prop should fallback to identity if key is falsy ([d7f7adc](https://github.com/neovici/cosmoz-autocomplete/commit/d7f7adc6f060892988e0d6ee1324a5ceb7284e2b))

## [2.2.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.1.0...v2.2.0) (2020-04-24)

### Features

- implements multi selection ([f7c797c](https://github.com/neovici/cosmoz-autocomplete/commit/f7c797c3ccb84118deb6ccfa4d57114e9b81a28f))

### Bug Fixes

- adds no-label-float ([2d7b8d6](https://github.com/neovici/cosmoz-autocomplete/commit/2d7b8d636773d06a2febf9eb59ec666a99aebe41))
- paper-autocomplete misc compat fixes ([503ef2c](https://github.com/neovici/cosmoz-autocomplete/commit/503ef2c34d84c87d43360d59fc645c52b92b3571))
- sort search results by position ([71b49d6](https://github.com/neovici/cosmoz-autocomplete/commit/71b49d6692853a8ebcc091eeb0702258a816c392))
- styles clear icon button ([fde2205](https://github.com/neovici/cosmoz-autocomplete/commit/fde22059a6b53a623f351206e68fa2b611527d63))
- use capture for keyboard navigation events ([d563bd6](https://github.com/neovici/cosmoz-autocomplete/commit/d563bd6d795ea53a0ff2648eec52fb29bff92ba5))

## [2.1.0](https://github.com/neovici/cosmoz-autocomplete/compare/v2.0.1...v2.1.0) (2020-04-22)

### Features

- adds query mark to cosmoz-suggestions ([086c090](https://github.com/neovici/cosmoz-autocomplete/commit/086c090b4c4f4fca99e2c58c29955c662c0ce4a9))

### Bug Fixes

- remote whitespace in mark template ([ff991b9](https://github.com/neovici/cosmoz-autocomplete/commit/ff991b96f3663a921aada1d98759b35f84082adb))

### [2.0.1](https://github.com/neovici/cosmoz-autocomplete/compare/v2.0.0...v2.0.1) (2020-04-22)

### Bug Fixes

- don't update text state unless it actually changed ([203abd1](https://github.com/neovici/cosmoz-autocomplete/commit/203abd160fc6b9b1506e0f951b9abacf3d79a87a))

## [2.0.0](https://github.com/neovici/cosmoz-autocomplete/compare/v1.0.2...v2.0.0) (2020-04-17)

### ⚠ BREAKING CHANGES

- new autocomplete implementation

### Features

- cleanup old repo ([23395c0](https://github.com/neovici/cosmoz-autocomplete/commit/23395c07657ced4d8b3d8964b75ca6724a77aa96))
- handles value in autocomplete ([b5ae729](https://github.com/neovici/cosmoz-autocomplete/commit/b5ae7298e4351b6d754880353659e19fdd01ac19))
- new autocomplete implementation ([aeb7e15](https://github.com/neovici/cosmoz-autocomplete/commit/aeb7e15eb51381213ff84d47e12c9616b54b7b09))
- refactor cosmoz-suggestions ([069ffb1](https://github.com/neovici/cosmoz-autocomplete/commit/069ffb151694ab8366ea713b8e499b76fc93940f))

### Bug Fixes

- adds propOrRoot ([28be9b6](https://github.com/neovici/cosmoz-autocomplete/commit/28be9b62435cf7dbe8ba58378df4310be0ebd559))
- improves autocomplete behavior ([faa4493](https://github.com/neovici/cosmoz-autocomplete/commit/faa4493246d930227579f012cc3fbbb58dad1677))
- onSelect check ([390b646](https://github.com/neovici/cosmoz-autocomplete/commit/390b64664ce34682e453cb5b70e7bdfe91df3079))
