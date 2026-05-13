:robot: I have created a release *beep* *boop*
---


<details><summary>api-contracts: 1.18.0</summary>

## [1.18.0](https://github.com/vm0-ai/vm0/compare/api-contracts-v1.17.0...api-contracts-v1.18.0) (2026-05-13)


### Features

* add agentphone app ui ([#13080](https://github.com/vm0-ai/vm0/issues/13080)) ([ee19fc5](https://github.com/vm0-ai/vm0/commit/ee19fc53fc786fd8890d8a0bc3a6209d86f41889))
* add AgentPhone iMessage transport ([#12964](https://github.com/vm0-ai/vm0/issues/12964)) ([abd2e25](https://github.com/vm0-ai/vm0/commit/abd2e2539582926c940949e010e0656dab4fd2c0))
* add agentphone phone tools ([#13028](https://github.com/vm0-ai/vm0/issues/13028)) ([5bdad6f](https://github.com/vm0-ai/vm0/commit/5bdad6ff42ac79a9532c4307895b58eee20b6515))
* add fal video generation ([#13121](https://github.com/vm0-ai/vm0/issues/13121)) ([152b289](https://github.com/vm0-ai/vm0/commit/152b28990211cb7ea3756218adab2e0152c41947))
* add model-first personal oauth configuration ([#12304](https://github.com/vm0-ai/vm0/issues/12304)) ([3e65bac](https://github.com/vm0-ai/vm0/commit/3e65bac1f9eee23719d86d4b12de392587be75a2))
* add model-first policy admin controls ([#12180](https://github.com/vm0-ai/vm0/issues/12180)) ([ff5b8c9](https://github.com/vm0-ai/vm0/commit/ff5b8c9b8d5fe06ff0120724f509d5baa873ade2))
* add private agents ([#12655](https://github.com/vm0-ai/vm0/issues/12655)) ([e37c8e5](https://github.com/vm0-ai/vm0/commit/e37c8e535da8ce48e011066b7c99e8ebffd8f076))
* add remote agent connector ([#12905](https://github.com/vm0-ai/vm0/issues/12905)) ([7627df6](https://github.com/vm0-ai/vm0/commit/7627df6dcb78e27bdac6d1c81d44f8f384b4de36))
* add remote-agent cli execution flow ([#12671](https://github.com/vm0-ai/vm0/issues/12671)) ([4f68949](https://github.com/vm0-ai/vm0/commit/4f68949d869868851ef281911160bf2b138a75ec))
* add remote-agent run inspection commands ([#12971](https://github.com/vm0-ai/vm0/issues/12971)) ([27c2da0](https://github.com/vm0-ai/vm0/commit/27c2da07db02ed1b227fb70a93a64b3cb16a6926))
* **api:** implement agent run create and cancel routes ([#13035](https://github.com/vm0-ai/vm0/issues/13035)) ([d9ec3af](https://github.com/vm0-ai/vm0/commit/d9ec3af52581f2d0fba217226eba9dbe3a6e2bb3))
* **api:** migrate billing checkout endpoint to api backend ([#12596](https://github.com/vm0-ai/vm0/issues/12596)) ([#12606](https://github.com/vm0-ai/vm0/issues/12606)) ([a666f95](https://github.com/vm0-ai/vm0/commit/a666f9528f008b1e825d7081f273788aa17a230f))
* **api:** migrate github integration update route ([#13015](https://github.com/vm0-ai/vm0/issues/13015)) ([b5663ab](https://github.com/vm0-ai/vm0/commit/b5663ab73f329263af46adf3eda72a247fbd30b2))
* **api:** migrate internal telegram-typing post to api backend ([#12525](https://github.com/vm0-ai/vm0/issues/12525)) ([29f62cf](https://github.com/vm0-ai/vm0/commit/29f62cfee65a19b6d23e5d9f6be80f41a3dac067))
* **api:** migrate org model-provider mutations ([#12972](https://github.com/vm0-ai/vm0/issues/12972)) ([54a5eb7](https://github.com/vm0-ai/vm0/commit/54a5eb775ee0194181b11a98fd9d1bbf641b6736))
* **api:** migrate test oauth token route ([#12998](https://github.com/vm0-ai/vm0/issues/12998)) ([e6f75b9](https://github.com/vm0-ai/vm0/commit/e6f75b96ce0533710e503e206db5fae0db9afa37))
* **api:** migrate third-party webhooks ([#13160](https://github.com/vm0-ai/vm0/issues/13160)) ([ad242ca](https://github.com/vm0-ai/vm0/commit/ad242cae340445b92e24bc5d8240ad0f32532cd3))
* **api:** migrate voice io post routes ([#12944](https://github.com/vm0-ai/vm0/issues/12944)) ([384fef8](https://github.com/vm0-ai/vm0/commit/384fef84e7b87163e0dc47f4a0112f11a72394ea))
* **api:** migrate zero chat messages route ([#13060](https://github.com/vm0-ai/vm0/issues/13060)) ([3047e83](https://github.com/vm0-ai/vm0/commit/3047e8393e2d24e6075ef3bb8643b989f08411f3))
* **api:** migrate zero email routes ([#13150](https://github.com/vm0-ai/vm0/issues/13150)) ([f65657e](https://github.com/vm0-ai/vm0/commit/f65657e0675667c31bda43e93b4534047b8ae9f5))
* **api:** migrate zero org logo delete route ([#12994](https://github.com/vm0-ai/vm0/issues/12994)) ([1bfd352](https://github.com/vm0-ai/vm0/commit/1bfd352141b94630b71194661b1dfca2860e098a))
* **api:** migrate zero schedules deploy and run routes ([#13137](https://github.com/vm0-ai/vm0/issues/13137)) ([5affefa](https://github.com/vm0-ai/vm0/commit/5affefa7531aa2f658c8d924fb1e17e676774e9b))
* **api:** port composes [id]/metadata PATCH to api backend (Wave 5) ([#12561](https://github.com/vm0-ai/vm0/issues/12561)) ([1fbaa00](https://github.com/vm0-ai/vm0/commit/1fbaa005166a28299f41f3eb9bf1381f4cebee2c))
* **chat:** add append-only chat interrupt events ([#12404](https://github.com/vm0-ai/vm0/issues/12404)) ([947fb71](https://github.com/vm0-ai/vm0/commit/947fb714fa212a9d2dee6e8db6a50ea44800fad6))
* **chat:** add append-only queued message recall ([#12253](https://github.com/vm0-ai/vm0/issues/12253)) ([d094a8f](https://github.com/vm0-ai/vm0/commit/d094a8fb4103adc8e09b7e25bc796484d45b7281))
* force a fresh CLI session when the user switches models mid-thread ([#13047](https://github.com/vm0-ai/vm0/issues/13047)) ([0b54497](https://github.com/vm0-ai/vm0/commit/0b54497433c6e114f323cea7a52342afbcb30fca))
* **voice-chat:** browser-reported realtime usage with session lifecycle (plan d) ([#12227](https://github.com/vm0-ai/vm0/issues/12227)) ([fa94d09](https://github.com/vm0-ai/vm0/commit/fa94d09b5e8b3cbcf9dc4435dbb5aec7e99fa674))
* **web-chat:** goal mode with self-replicating user message chain ([#12508](https://github.com/vm0-ai/vm0/issues/12508)) ([dc0d610](https://github.com/vm0-ai/vm0/commit/dc0d61038ecef81b5fefa4269249c8d2f99c1b18))


### Bug Fixes

* add missing model display names for GPT and MiniMax OpenRouter models ([#12216](https://github.com/vm0-ai/vm0/issues/12216)) ([3b5abd0](https://github.com/vm0-ai/vm0/commit/3b5abd03b9aa8166570fdc4c317926aea7df87b4))
* allow full codex backend subtree in codex-oauth-token firewall ([#12235](https://github.com/vm0-ai/vm0/issues/12235)) ([85ca54d](https://github.com/vm0-ai/vm0/commit/85ca54d02f0dbe9c102df915983a41838788fd31))
* normalize instructions filename by runtime framework ([#12245](https://github.com/vm0-ai/vm0/issues/12245)) ([55b4846](https://github.com/vm0-ai/vm0/commit/55b484668ed1b559e2bf16f74ad3fcc4b4559c1f))
* pin model-first chat thread model ([#12740](https://github.com/vm0-ai/vm0/issues/12740)) ([de6006a](https://github.com/vm0-ai/vm0/commit/de6006ac76936e3f67257ac736e81a2c360b1c30))
* refresh connector auth state and catalog ([#12218](https://github.com/vm0-ai/vm0/issues/12218)) ([9cde9c6](https://github.com/vm0-ai/vm0/commit/9cde9c6dd39a3fe2bc266d681ae8c15227a15782))


### Refactoring

* **api:** migrate billing invoices get to api backend ([#12363](https://github.com/vm0-ai/vm0/issues/12363)) ([504c11a](https://github.com/vm0-ai/vm0/commit/504c11a585c681e2d5c15bc7504e87538c6f13c3))
* **api:** migrate chat callback ([#13111](https://github.com/vm0-ai/vm0/issues/13111)) ([4ff6f43](https://github.com/vm0-ai/vm0/commit/4ff6f4375712738a10f0495d26e7576ed660da29))
* **api:** migrate cli auth routes ([#13033](https://github.com/vm0-ai/vm0/issues/13033)) ([a7c2a07](https://github.com/vm0-ai/vm0/commit/a7c2a07ef66882744298374231a64183c61923bc))
* **api:** migrate Codex OAuth model-provider routes ([#12956](https://github.com/vm0-ai/vm0/issues/12956)) ([721a18c](https://github.com/vm0-ai/vm0/commit/721a18c93b3994b0fc7d3ac0f0c8773386a5a69a))
* **api:** migrate connector oauth direct routes ([#12962](https://github.com/vm0-ai/vm0/issues/12962)) ([2293ee9](https://github.com/vm0-ai/vm0/commit/2293ee986e4e55f1004d6d58c8d5550c4938a203))
* **api:** migrate cron usage billing routes ([#13030](https://github.com/vm0-ai/vm0/issues/13030)) ([8bdee9c](https://github.com/vm0-ai/vm0/commit/8bdee9c022480628b42f809753963150ee4693c6))
* **api:** migrate email unsubscribe get route ([#13005](https://github.com/vm0-ai/vm0/issues/13005)) ([5fef14a](https://github.com/vm0-ai/vm0/commit/5fef14ae4d87fa7894436d83de6a073acbb0c6d2))
* **api:** migrate email unsubscribe route ([#13010](https://github.com/vm0-ai/vm0/issues/13010)) ([6b6ef71](https://github.com/vm0-ai/vm0/commit/6b6ef71b5e34070925c36b9dbd6bcf90d073ef77))
* **api:** migrate github integration delete route ([#12954](https://github.com/vm0-ai/vm0/issues/12954)) ([399dfe5](https://github.com/vm0-ai/vm0/commit/399dfe5f57514e3e7cad840f297643b4d5adceed))
* **api:** migrate github issues callback ([#13085](https://github.com/vm0-ai/vm0/issues/13085)) ([5d627c1](https://github.com/vm0-ai/vm0/commit/5d627c1ef7bf243003e5192f9adeaf3447699a34))
* **api:** migrate github oauth get routes ([#12986](https://github.com/vm0-ai/vm0/issues/12986)) ([ca4b7f1](https://github.com/vm0-ai/vm0/commit/ca4b7f1964f4762044a612ee867868166940fecf))
* **api:** migrate internal agent callback ([#13077](https://github.com/vm0-ai/vm0/issues/13077)) ([b40a430](https://github.com/vm0-ai/vm0/commit/b40a4301b30c5abee3d544fa282bad636b21c975))
* **api:** migrate internal event consumers ([#13006](https://github.com/vm0-ai/vm0/issues/13006)) ([90a0043](https://github.com/vm0-ai/vm0/commit/90a0043d4ddccfd9599c4d16f305742abe6092fe))
* **api:** migrate internal schedule callbacks ([#13084](https://github.com/vm0-ai/vm0/issues/13084)) ([f11641a](https://github.com/vm0-ai/vm0/commit/f11641a748d784f518d19043b32893bfa40b61b5))
* **api:** migrate run agent events get to api backend ([#12422](https://github.com/vm0-ai/vm0/issues/12422)) ([75f4efa](https://github.com/vm0-ai/vm0/commit/75f4efaca4354a0c57f64e69d47a1b72cee974a2))
* **api:** migrate run context get ([#12420](https://github.com/vm0-ai/vm0/issues/12420)) ([fc9cc36](https://github.com/vm0-ai/vm0/commit/fc9cc367b9fbe67fa17b670353e86c36a267b985))
* **api:** migrate run network logs get to api backend ([#12421](https://github.com/vm0-ai/vm0/issues/12421)) ([f2bd43b](https://github.com/vm0-ai/vm0/commit/f2bd43b86783e625f06b489ac6deb86802b3ed89)), closes [#12417](https://github.com/vm0-ai/vm0/issues/12417)
* **api:** migrate runner post routes ([#13001](https://github.com/vm0-ai/vm0/issues/13001)) ([d352abb](https://github.com/vm0-ai/vm0/commit/d352abb0dae68703da190d98c82dc67653b7a15c))
* **api:** migrate slack org callback ([#13099](https://github.com/vm0-ai/vm0/issues/13099)) ([cd9abe1](https://github.com/vm0-ai/vm0/commit/cd9abe1a7c7b27b561cecd0f845a4ca213a16b41))
* **api:** migrate slack state delete route ([#12968](https://github.com/vm0-ai/vm0/issues/12968)) ([4f84a71](https://github.com/vm0-ai/vm0/commit/4f84a7178a54373dffcfb0d7e5c0f004dadfdfe4))
* **api:** migrate slack webhooks ([#13145](https://github.com/vm0-ai/vm0/issues/13145)) ([280d359](https://github.com/vm0-ai/vm0/commit/280d359fc085cbd309ee80788296ad61d2d60ee9))
* **api:** migrate telegram callback ([#13093](https://github.com/vm0-ai/vm0/issues/13093)) ([755e1bb](https://github.com/vm0-ai/vm0/commit/755e1bbad99763927c8233923c7d1ed040fb80e2))
* **api:** migrate telegram integration get routes ([#12969](https://github.com/vm0-ai/vm0/issues/12969)) ([4e62786](https://github.com/vm0-ai/vm0/commit/4e62786c07b510166073c740552b4b7fec5b90e6))
* **api:** migrate telegram mock route ([#12995](https://github.com/vm0-ai/vm0/issues/12995)) ([7c7d409](https://github.com/vm0-ai/vm0/commit/7c7d4095ef24e9dc2343b83853da58e32081156f))
* **api:** migrate telegram test state seeding ([#12985](https://github.com/vm0-ai/vm0/issues/12985)) ([96b8fbb](https://github.com/vm0-ai/vm0/commit/96b8fbb62b7f6b3d55a322a8bbcd3a77df8cdb69))
* **api:** migrate test slack state post route ([#12988](https://github.com/vm0-ai/vm0/issues/12988)) ([1a77b71](https://github.com/vm0-ai/vm0/commit/1a77b71818739e448f2bfa9529656c48421fdf36))
* **api:** migrate test telegram state delete route ([#12977](https://github.com/vm0-ai/vm0/issues/12977)) ([5ade3b3](https://github.com/vm0-ai/vm0/commit/5ade3b3dcaebeb32e6fa7d15c9975c306a334601))
* **api:** migrate usage route to api backend ([#12906](https://github.com/vm0-ai/vm0/issues/12906)) ([df42008](https://github.com/vm0-ai/vm0/commit/df42008a4dd9fece0a021e35c957ff343f713285))
* **api:** migrate user export POST ([#13034](https://github.com/vm0-ai/vm0/issues/13034)) ([193fed0](https://github.com/vm0-ai/vm0/commit/193fed08017d9767be51c73ae5d083e761917447))
* **api:** migrate voice chat post routes ([#13039](https://github.com/vm0-ai/vm0/issues/13039)) ([417be66](https://github.com/vm0-ai/vm0/commit/417be6633818d5a80796e277c6d4eacab335343f))
* **api:** migrate voice-chat callback ([#13105](https://github.com/vm0-ai/vm0/issues/13105)) ([bdc1367](https://github.com/vm0-ai/vm0/commit/bdc1367cf833a912f4e320c21c05af2a5893c71a))
* **api:** migrate zero connector authorize routes ([#12910](https://github.com/vm0-ai/vm0/issues/12910)) ([f122f40](https://github.com/vm0-ai/vm0/commit/f122f40dc126240b232902e37829271b1e1c11ff))
* **api:** migrate zero image io generate route ([#13061](https://github.com/vm0-ai/vm0/issues/13061)) ([8976c68](https://github.com/vm0-ai/vm0/commit/8976c68a6a2a277cc75982810b2a9331e5a1d77f))
* **api:** migrate zero org delete route ([#12973](https://github.com/vm0-ai/vm0/issues/12973)) ([7e4033e](https://github.com/vm0-ai/vm0/commit/7e4033e48ccbfbc87db90a46774887aa29da2c13))
* **api:** migrate zero org domains add route ([#12966](https://github.com/vm0-ai/vm0/issues/12966)) ([20677d6](https://github.com/vm0-ai/vm0/commit/20677d68d455a18f778566efe9f904bc5b4cb16a))
* **api:** migrate zero org leave route ([#12963](https://github.com/vm0-ai/vm0/issues/12963)) ([e6271ef](https://github.com/vm0-ai/vm0/commit/e6271efe807772850185e808ef7446e549fb79f2))
* **api:** migrate zero org logo upload route ([#12953](https://github.com/vm0-ai/vm0/issues/12953)) ([dee447f](https://github.com/vm0-ai/vm0/commit/dee447f07b6423fa426e41a3bef885f2d0d0f633))
* **api:** migrate zero org members delete route ([#13003](https://github.com/vm0-ai/vm0/issues/13003)) ([6a1dcb2](https://github.com/vm0-ai/vm0/commit/6a1dcb2fed5869df5983c68e0999bc2d588acfb5))
* **api:** migrate zero org members patch ([#13029](https://github.com/vm0-ai/vm0/issues/13029)) ([659cff6](https://github.com/vm0-ai/vm0/commit/659cff699968e2e2d26ba6f4f865170c98c01302))
* **api:** migrate zero report-error route ([#12961](https://github.com/vm0-ai/vm0/issues/12961)) ([f6a0127](https://github.com/vm0-ai/vm0/commit/f6a012768ed0939c2cabce390a0d7f0941e9188a))
* **api:** migrate zero runs create route ([#13076](https://github.com/vm0-ai/vm0/issues/13076)) ([2b64ac7](https://github.com/vm0-ai/vm0/commit/2b64ac71d8ac51509b1953d40fe140b707a2d444))
* **api:** migrate zero schedules delete route ([#12999](https://github.com/vm0-ai/vm0/issues/12999)) ([74c2817](https://github.com/vm0-ai/vm0/commit/74c28173061133bbfaabe6e10e5734b83eba95c2))
* **api:** migrate zero skills update route ([#12913](https://github.com/vm0-ai/vm0/issues/12913)) ([fe3000e](https://github.com/vm0-ai/vm0/commit/fe3000effede31da8b96643cf0d2491b6a11aaa2))
* **api:** migrate zero slack oauth routes ([#12958](https://github.com/vm0-ai/vm0/issues/12958)) ([7e76cde](https://github.com/vm0-ai/vm0/commit/7e76cde7a3ee7ee8358b7cdd5b060d265f41f9fc))
* make codex providers feature-switch free ([#13126](https://github.com/vm0-ai/vm0/issues/13126)) ([6a3e7b3](https://github.com/vm0-ai/vm0/commit/6a3e7b37ff6fb0cd473bd72f61ff80e6ca74195f))
* make zero model-first only ([#13017](https://github.com/vm0-ai/vm0/issues/13017)) ([9bcb323](https://github.com/vm0-ai/vm0/commit/9bcb323d6e2c32dfdd2d1bf9fa63d0d2bf9e1ef1))
* migrate agent composes read routes to api ([#12950](https://github.com/vm0-ai/vm0/issues/12950)) ([bc0a2fb](https://github.com/vm0-ai/vm0/commit/bc0a2fb55b133e044c0dc991cfc50d5c95dc9d42))
* migrate generate image route to api ([#13012](https://github.com/vm0-ai/vm0/issues/13012)) ([1718609](https://github.com/vm0-ai/vm0/commit/171860936b1f0f585209db68ad302d1dc9b320f4))
* migrate github integration status to api ([#12976](https://github.com/vm0-ai/vm0/issues/12976)) ([bdf0270](https://github.com/vm0-ai/vm0/commit/bdf0270487661b5d8f44aac480e75ddcd651682b))
* migrate slack mock test routes to api ([#12996](https://github.com/vm0-ai/vm0/issues/12996)) ([453e60f](https://github.com/vm0-ai/vm0/commit/453e60f4e70305fc86896e539430030bc861e073))
* migrate storage GET routes to api backend ([#12957](https://github.com/vm0-ai/vm0/issues/12957)) ([1fe70fb](https://github.com/vm0-ai/vm0/commit/1fe70fb9ff07ceaf9f986816f8879d1f7a86e034))
* migrate test oauth provider get routes to api ([#12916](https://github.com/vm0-ai/vm0/issues/12916)) ([37019ca](https://github.com/vm0-ai/vm0/commit/37019ca6abb6bb29a0d391976e6377bc2e2dd83c))
* migrate test slack state get to api ([#12948](https://github.com/vm0-ai/vm0/issues/12948)) ([0e8ff89](https://github.com/vm0-ai/vm0/commit/0e8ff89ef99316ad6dfc0291e517db2d1eead220))
* migrate test telegram state GET to api backend ([#12943](https://github.com/vm0-ai/vm0/issues/12943)) ([e1ad37d](https://github.com/vm0-ai/vm0/commit/e1ad37d29feae5b567237e4f06510da4b832554f))
* migrate user export status to api ([#12949](https://github.com/vm0-ai/vm0/issues/12949)) ([0286e19](https://github.com/vm0-ai/vm0/commit/0286e19438623b2a84f2b898e93655c3fdb270d2))
* migrate v1 chat message send to api ([#13038](https://github.com/vm0-ai/vm0/issues/13038)) ([bf1a41e](https://github.com/vm0-ai/vm0/commit/bf1a41e56e05fad9b1b2487ae8f15f3d175b5877))
* migrate zero org logo GET to api backend ([#12929](https://github.com/vm0-ai/vm0/issues/12929)) ([91c2e28](https://github.com/vm0-ai/vm0/commit/91c2e28a5066a02a42419d9b1c3e06917a7cc51a))
* remove personal model provider switch ([#12361](https://github.com/vm0-ai/vm0/issues/12361)) ([6953d00](https://github.com/vm0-ai/vm0/commit/6953d0046a8c160e394ae079b0d3f5037b9f7c08))
* use member metadata for model-first preference ([#12630](https://github.com/vm0-ai/vm0/issues/12630)) ([452eeb3](https://github.com/vm0-ai/vm0/commit/452eeb3fd693feac5c369ad22d432c7dd49b8c29))
</details>

<details><summary>app: 0.349.0</summary>

## [0.349.0](https://github.com/vm0-ai/vm0/compare/app-v0.348.3...app-v0.349.0) (2026-05-13)


### Features

* add web chat context prompt ([#13168](https://github.com/vm0-ai/vm0/issues/13168)) ([5122b36](https://github.com/vm0-ai/vm0/commit/5122b36463b009abe1763b722722f1f9526c7624))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @vm0/api-contracts bumped to 1.18.0
    * @vm0/core bumped to 8.273.0
</details>

<details><summary>cli: 9.149.1</summary>

## [9.149.1](https://github.com/vm0-ai/vm0/compare/cli-v9.149.0...cli-v9.149.1) (2026-05-13)


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @vm0/api-contracts bumped to 1.18.0
    * @vm0/core bumped to 8.273.0
</details>

<details><summary>core: 8.273.0</summary>

## [8.273.0](https://github.com/vm0-ai/vm0/compare/core-v8.272.2...core-v8.273.0) (2026-05-13)


### Features

* add agentphone app ui ([#13080](https://github.com/vm0-ai/vm0/issues/13080)) ([ee19fc5](https://github.com/vm0-ai/vm0/commit/ee19fc53fc786fd8890d8a0bc3a6209d86f41889))
* add AgentPhone iMessage transport ([#12964](https://github.com/vm0-ai/vm0/issues/12964)) ([abd2e25](https://github.com/vm0-ai/vm0/commit/abd2e2539582926c940949e010e0656dab4fd2c0))
* add cli auth feature flags ([#13142](https://github.com/vm0-ai/vm0/issues/13142)) ([a753902](https://github.com/vm0-ai/vm0/commit/a753902d30e947160afe78c2e85014691f67af07))
* add private agents ([#12655](https://github.com/vm0-ai/vm0/issues/12655)) ([e37c8e5](https://github.com/vm0-ai/vm0/commit/e37c8e535da8ce48e011066b7c99e8ebffd8f076))
* add remote-agent cli execution flow ([#12671](https://github.com/vm0-ai/vm0/issues/12671)) ([4f68949](https://github.com/vm0-ai/vm0/commit/4f68949d869868851ef281911160bf2b138a75ec))
* add strapi docs site route ([#12330](https://github.com/vm0-ai/vm0/issues/12330)) ([f5100df](https://github.com/vm0-ai/vm0/commit/f5100dfa9452cfd69dcdc790ff73a213e3702ba2))
* enable chat ux feature switches at org level for staff ([#12504](https://github.com/vm0-ai/vm0/issues/12504)) ([be55abf](https://github.com/vm0-ai/vm0/commit/be55abf671c588a36ac650e15ee4a9ae3283a226))
* enable model-first for staff ([#12328](https://github.com/vm0-ai/vm0/issues/12328)) ([057ce1c](https://github.com/vm0-ai/vm0/commit/057ce1c11cd7d3ce6c7e0a24de7ac52e2bd41ea3))
* **platform:** add api-backend-mutations feature switch + client routing ([#12507](https://github.com/vm0-ai/vm0/issues/12507)) ([48f4662](https://github.com/vm0-ai/vm0/commit/48f466249435008cc6f569eb952b0dfd8a5edefb))
* **web-chat:** goal mode with self-replicating user message chain ([#12508](https://github.com/vm0-ai/vm0/issues/12508)) ([dc0d610](https://github.com/vm0-ai/vm0/commit/dc0d61038ecef81b5fefa4269249c8d2f99c1b18))


### Bug Fixes

* add missing model display names for GPT and MiniMax OpenRouter models ([#12216](https://github.com/vm0-ai/vm0/issues/12216)) ([3b5abd0](https://github.com/vm0-ai/vm0/commit/3b5abd03b9aa8166570fdc4c317926aea7df87b4))
* migrate voice chat to Realtime GA API ([#12658](https://github.com/vm0-ai/vm0/issues/12658)) ([ebfa606](https://github.com/vm0-ai/vm0/commit/ebfa606955833ccfebc2191689843bd898fc2c39))


### Refactoring

* **api:** migrate telegram mock route ([#12995](https://github.com/vm0-ai/vm0/issues/12995)) ([7c7d409](https://github.com/vm0-ai/vm0/commit/7c7d4095ef24e9dc2343b83853da58e32081156f))
* **api:** migrate zero onboarding setup route ([#12975](https://github.com/vm0-ai/vm0/issues/12975)) ([a99038b](https://github.com/vm0-ai/vm0/commit/a99038ba5394dccfeeb2428171eaa9ff4ed20301))
* **api:** migrate zero skills create route ([#12952](https://github.com/vm0-ai/vm0/issues/12952)) ([a9f063c](https://github.com/vm0-ai/vm0/commit/a9f063c85e9c217f5ee89b7ad46ad46efca5ac28))
* **api:** migrate zero slack oauth routes ([#12958](https://github.com/vm0-ai/vm0/issues/12958)) ([7e76cde](https://github.com/vm0-ai/vm0/commit/7e76cde7a3ee7ee8358b7cdd5b060d265f41f9fc))
* make codex providers feature-switch free ([#13126](https://github.com/vm0-ai/vm0/issues/13126)) ([6a3e7b3](https://github.com/vm0-ai/vm0/commit/6a3e7b37ff6fb0cd473bd72f61ff80e6ca74195f))
* make zero model-first only ([#13017](https://github.com/vm0-ai/vm0/issues/13017)) ([9bcb323](https://github.com/vm0-ai/vm0/commit/9bcb323d6e2c32dfdd2d1bf9fa63d0d2bf9e1ef1))
* migrate user export status to api ([#12949](https://github.com/vm0-ai/vm0/issues/12949)) ([0286e19](https://github.com/vm0-ai/vm0/commit/0286e19438623b2a84f2b898e93655c3fdb270d2))
* remove fully-enabled OfficialTelegramBot and ChatManualHistory feature switches ([#12349](https://github.com/vm0-ai/vm0/issues/12349)) ([ed51160](https://github.com/vm0-ai/vm0/commit/ed511603a19ec14a0003fccba66250560c290165))
* remove personal model provider switch ([#12361](https://github.com/vm0-ai/vm0/issues/12361)) ([6953d00](https://github.com/vm0-ai/vm0/commit/6953d0046a8c160e394ae079b0d3f5037b9f7c08))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @vm0/api-contracts bumped to 1.18.0
</details>

<details><summary>db: 1.9.1</summary>

## [1.9.1](https://github.com/vm0-ai/vm0/compare/db-v1.9.0...db-v1.9.1) (2026-05-13)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @vm0/api-contracts bumped to 1.18.0
</details>

<details><summary>api: 1.41.0</summary>

## [1.41.0](https://github.com/vm0-ai/vm0/compare/api-v1.40.0...api-v1.41.0) (2026-05-13)


### Features

* add agentphone app ui ([#13080](https://github.com/vm0-ai/vm0/issues/13080)) ([ee19fc5](https://github.com/vm0-ai/vm0/commit/ee19fc53fc786fd8890d8a0bc3a6209d86f41889))
* add fal video generation ([#13121](https://github.com/vm0-ai/vm0/issues/13121)) ([152b289](https://github.com/vm0-ai/vm0/commit/152b28990211cb7ea3756218adab2e0152c41947))
* add model-first policy admin controls ([#12180](https://github.com/vm0-ai/vm0/issues/12180)) ([ff5b8c9](https://github.com/vm0-ai/vm0/commit/ff5b8c9b8d5fe06ff0120724f509d5baa873ade2))
* add private agents ([#12655](https://github.com/vm0-ai/vm0/issues/12655)) ([e37c8e5](https://github.com/vm0-ai/vm0/commit/e37c8e535da8ce48e011066b7c99e8ebffd8f076))
* add remote agent connector ([#12905](https://github.com/vm0-ai/vm0/issues/12905)) ([7627df6](https://github.com/vm0-ai/vm0/commit/7627df6dcb78e27bdac6d1c81d44f8f384b4de36))
* add remote-agent cli execution flow ([#12671](https://github.com/vm0-ai/vm0/issues/12671)) ([4f68949](https://github.com/vm0-ai/vm0/commit/4f68949d869868851ef281911160bf2b138a75ec))
* add remote-agent run inspection commands ([#12971](https://github.com/vm0-ai/vm0/issues/12971)) ([27c2da0](https://github.com/vm0-ai/vm0/commit/27c2da07db02ed1b227fb70a93a64b3cb16a6926))
* add web chat context prompt ([#13168](https://github.com/vm0-ai/vm0/issues/13168)) ([5122b36](https://github.com/vm0-ai/vm0/commit/5122b36463b009abe1763b722722f1f9526c7624))
* **api:** add attachDatabasePool and env-configurable pool params ([#12239](https://github.com/vm0-ai/vm0/issues/12239)) ([b4f000d](https://github.com/vm0-ai/vm0/commit/b4f000d86f0792dcb09d50c4c2865b2afbb63993))
* **api:** add callback-route hmac auth primitive (prereq for Wave 6 [#19](https://github.com/vm0-ai/vm0/issues/19)) ([#12768](https://github.com/vm0-ai/vm0/issues/12768)) ([d25165a](https://github.com/vm0-ai/vm0/commit/d25165a0ea8618833484168fc46b974cedaf35a2))
* **api:** implement agent run create and cancel routes ([#13035](https://github.com/vm0-ai/vm0/issues/13035)) ([d9ec3af](https://github.com/vm0-ai/vm0/commit/d9ec3af52581f2d0fba217226eba9dbe3a6e2bb3))
* **api:** implement zero org members list clerk parity ([#12447](https://github.com/vm0-ai/vm0/issues/12447)) ([19f4888](https://github.com/vm0-ai/vm0/commit/19f4888f517dbf4cb277e0199e6e0242768cd374))
* **api:** migrate agent compose metadata route ([#13007](https://github.com/vm0-ai/vm0/issues/13007)) ([7aab48e](https://github.com/vm0-ai/vm0/commit/7aab48ec2d9c6ade59686d73031632214f3ab688))
* **api:** migrate auto-recharge put to api backend (wave 6 [#9](https://github.com/vm0-ai/vm0/issues/9)) ([#12715](https://github.com/vm0-ai/vm0/issues/12715)) ([5fb26e1](https://github.com/vm0-ai/vm0/commit/5fb26e181a42817bd7fa21237e7d85e2fe44eafc)), closes [#12290](https://github.com/vm0-ai/vm0/issues/12290) [#12711](https://github.com/vm0-ai/vm0/issues/12711)
* **api:** migrate billing checkout endpoint to api backend ([#12596](https://github.com/vm0-ai/vm0/issues/12596)) ([#12606](https://github.com/vm0-ai/vm0/issues/12606)) ([a666f95](https://github.com/vm0-ai/vm0/commit/a666f9528f008b1e825d7081f273788aa17a230f))
* **api:** migrate billing downgrade endpoint to api backend ([#12680](https://github.com/vm0-ai/vm0/issues/12680)) ([#12697](https://github.com/vm0-ai/vm0/issues/12697)) ([bb19bf0](https://github.com/vm0-ai/vm0/commit/bb19bf0a0f6a93dd53890a4062ca9335e4eaf3a2))
* **api:** migrate billing/redeem post to api backend (wave 6 [#14](https://github.com/vm0-ai/vm0/issues/14)) ([#12751](https://github.com/vm0-ai/vm0/issues/12751)) ([9848d11](https://github.com/vm0-ai/vm0/commit/9848d118aeb473d3abc56cc647b4f170f51e7a25))
* **api:** migrate chat-threads patch [id] (update draft) to api backend ([#12569](https://github.com/vm0-ai/vm0/issues/12569)) ([d706640](https://github.com/vm0-ai/vm0/commit/d706640a6f3d25b2b54d693f5cd8ad4912868f62))
* **api:** migrate chat-threads pin route to api backend ([#12517](https://github.com/vm0-ai/vm0/issues/12517)) ([f2188d4](https://github.com/vm0-ai/vm0/commit/f2188d40c16ba7f0cfa8ae048348fc3c002866bd))
* **api:** migrate computer-use register+unregister to api backend (wave 6 [#16](https://github.com/vm0-ai/vm0/issues/16)) ([#12750](https://github.com/vm0-ai/vm0/issues/12750)) ([8437d31](https://github.com/vm0-ai/vm0/commit/8437d31c3cfb8765601337dbb8d58aa19da62ab9)), closes [#12737](https://github.com/vm0-ai/vm0/issues/12737) [#12290](https://github.com/vm0-ai/vm0/issues/12290)
* **api:** migrate custom-connectors put [id]/secret to api backend ([#12534](https://github.com/vm0-ai/vm0/issues/12534)) ([34e1242](https://github.com/vm0-ai/vm0/commit/34e12422714c98cfac944d061107bba0bca67218))
* **api:** migrate github integration update route ([#13015](https://github.com/vm0-ai/vm0/issues/13015)) ([b5663ab](https://github.com/vm0-ai/vm0/commit/b5663ab73f329263af46adf3eda72a247fbd30b2))
* **api:** migrate integrations/slack/connect post to api backend ([#12795](https://github.com/vm0-ai/vm0/issues/12795)) ([cea3812](https://github.com/vm0-ai/vm0/commit/cea381281078dcf2874279510d9e4ac074ac12f9))
* **api:** migrate integrations/slack/message post to api backend (wave 6 [#15](https://github.com/vm0-ai/vm0/issues/15)) ([#12748](https://github.com/vm0-ai/vm0/issues/12748)) ([5d39641](https://github.com/vm0-ai/vm0/commit/5d396418e9de7689811f742bc6355abb06a0eedb))
* **api:** migrate integrations/slack/upload-file init+complete to api backend (wave 6 [#18](https://github.com/vm0-ai/vm0/issues/18)) ([#12767](https://github.com/vm0-ai/vm0/issues/12767)) ([fad9050](https://github.com/vm0-ai/vm0/commit/fad9050746abb4292017e2c9e2f7542333d3e84f))
* **api:** migrate integrations/telegram/upload-file init+complete to api backend (wave 6 [#17](https://github.com/vm0-ai/vm0/issues/17)) ([#12752](https://github.com/vm0-ai/vm0/issues/12752)) ([6cb78ac](https://github.com/vm0-ai/vm0/commit/6cb78ac1f03145836e7fdd482b5cce235e83ef1e))
* **api:** migrate internal telegram-typing post to api backend ([#12525](https://github.com/vm0-ai/vm0/issues/12525)) ([29f62cf](https://github.com/vm0-ai/vm0/commit/29f62cfee65a19b6d23e5d9f6be80f41a3dac067))
* **api:** migrate me/model-providers post [type]/default to api backend ([#12560](https://github.com/vm0-ai/vm0/issues/12560)) ([af6c776](https://github.com/vm0-ai/vm0/commit/af6c776e4923c05dc8cb9b6f435a9aa2d67b56a5))
* **api:** migrate me/model-providers post upsert to api backend (Wave 5  completes family) ([#12591](https://github.com/vm0-ai/vm0/issues/12591)) ([acca625](https://github.com/vm0-ai/vm0/commit/acca625468e9d19e8c6eb8133a7ecb68998f4060))
* **api:** migrate onboarding/complete post to api backend ([#12695](https://github.com/vm0-ai/vm0/issues/12695)) ([622a993](https://github.com/vm0-ai/vm0/commit/622a99373eb7c33bf796538771281199c779f261))
* **api:** migrate org model-provider mutations ([#12972](https://github.com/vm0-ai/vm0/issues/12972)) ([54a5eb7](https://github.com/vm0-ai/vm0/commit/54a5eb775ee0194181b11a98fd9d1bbf641b6736))
* **api:** migrate org/invite delete (revoke) to api backend (wave 6 [#11](https://github.com/vm0-ai/vm0/issues/11)) ([#12724](https://github.com/vm0-ai/vm0/issues/12724)) ([cede412](https://github.com/vm0-ai/vm0/commit/cede41246203854349cc5da8a91e2b4b26c02019))
* **api:** migrate org/members/credit-cap put to api backend (wave 6 [#13](https://github.com/vm0-ai/vm0/issues/13)) ([#12732](https://github.com/vm0-ai/vm0/issues/12732)) ([566a767](https://github.com/vm0-ai/vm0/commit/566a76775d26130b2e4444f4f5f40a89a1275e96)), closes [#12290](https://github.com/vm0-ai/vm0/issues/12290) [#12726](https://github.com/vm0-ai/vm0/issues/12726)
* **api:** migrate org/membership-requests accept+reject to api backend (wave 6 [#12](https://github.com/vm0-ai/vm0/issues/12)) ([#12728](https://github.com/vm0-ai/vm0/issues/12728)) ([4df31c6](https://github.com/vm0-ai/vm0/commit/4df31c6c7e68fb53fca5643fa8c2f2add23ca04a))
* **api:** migrate permission-policies put to api backend (Wave 6 [#6](https://github.com/vm0-ai/vm0/issues/6)) ([#12687](https://github.com/vm0-ai/vm0/issues/12687)) ([843d550](https://github.com/vm0-ai/vm0/commit/843d55024d5b848912e9b01cc8ce0356c26e33c0))
* **api:** migrate push-subscriptions post to api backend (wave 6 [#8](https://github.com/vm0-ai/vm0/issues/8)) ([#12694](https://github.com/vm0-ai/vm0/issues/12694)) ([864ec4d](https://github.com/vm0-ai/vm0/commit/864ec4d66dc9c0b3cfcfb01fec03d9b77cf925de)), closes [#12683](https://github.com/vm0-ai/vm0/issues/12683)
* **api:** migrate schedules enable/disable post to api backend (wave 6 [#10](https://github.com/vm0-ai/vm0/issues/10)) ([#12722](https://github.com/vm0-ai/vm0/issues/12722)) ([38add2b](https://github.com/vm0-ai/vm0/commit/38add2bfea1db1327ace023b90ddedd5a86423ef)), closes [#12713](https://github.com/vm0-ai/vm0/issues/12713)
* **api:** migrate telegram link route ([#13031](https://github.com/vm0-ai/vm0/issues/13031)) ([510d5e8](https://github.com/vm0-ai/vm0/commit/510d5e85b62e93ad61a807f1629d7d2979b5fd24))
* **api:** migrate test oauth token route ([#12998](https://github.com/vm0-ai/vm0/issues/12998)) ([e6f75b9](https://github.com/vm0-ai/vm0/commit/e6f75b96ce0533710e503e206db5fae0db9afa37))
* **api:** migrate third-party webhooks ([#13160](https://github.com/vm0-ai/vm0/issues/13160)) ([ad242ca](https://github.com/vm0-ai/vm0/commit/ad242cae340445b92e24bc5d8240ad0f32532cd3))
* **api:** migrate variables delete [name] to api backend ([#12549](https://github.com/vm0-ai/vm0/issues/12549)) ([808c8ae](https://github.com/vm0-ai/vm0/commit/808c8aece8b067b69cf27e0ab7cdc635decf0ec5))
* **api:** migrate voice io post routes ([#12944](https://github.com/vm0-ai/vm0/issues/12944)) ([384fef8](https://github.com/vm0-ai/vm0/commit/384fef84e7b87163e0dc47f4a0112f11a72394ea))
* **api:** migrate zero agents create route ([#13159](https://github.com/vm0-ai/vm0/issues/13159)) ([d9b751e](https://github.com/vm0-ai/vm0/commit/d9b751eea5c4ba187bfb2b4d5a35d4809f6fd02b))
* **api:** migrate zero chat messages route ([#13060](https://github.com/vm0-ai/vm0/issues/13060)) ([3047e83](https://github.com/vm0-ai/vm0/commit/3047e8393e2d24e6075ef3bb8643b989f08411f3))
* **api:** migrate zero connector post routes ([#12987](https://github.com/vm0-ai/vm0/issues/12987)) ([45d831e](https://github.com/vm0-ai/vm0/commit/45d831e9a78dcdf34f1a0f473210a007f541ff5e))
* **api:** migrate zero email routes ([#13150](https://github.com/vm0-ai/vm0/issues/13150)) ([f65657e](https://github.com/vm0-ai/vm0/commit/f65657e0675667c31bda43e93b4534047b8ae9f5))
* **api:** migrate zero org logo delete route ([#12994](https://github.com/vm0-ai/vm0/issues/12994)) ([1bfd352](https://github.com/vm0-ai/vm0/commit/1bfd352141b94630b71194661b1dfca2860e098a))
* **api:** migrate zero schedules deploy and run routes ([#13137](https://github.com/vm0-ai/vm0/issues/13137)) ([5affefa](https://github.com/vm0-ai/vm0/commit/5affefa7531aa2f658c8d924fb1e17e676774e9b))
* **api:** port build talker payload to voice-chat session get ([#12470](https://github.com/vm0-ai/vm0/issues/12470)) ([ab189cc](https://github.com/vm0-ai/vm0/commit/ab189ccbc6bfb3de4398e99d00cb02173342dab9)), closes [#12463](https://github.com/vm0-ai/vm0/issues/12463)
* **api:** port chat-threads mark-read post to api backend ([#12511](https://github.com/vm0-ai/vm0/issues/12511)) ([e37f0e8](https://github.com/vm0-ai/vm0/commit/e37f0e8d774013073d6e0c11174c464b79e84f6f))
* **api:** port composes [id]/metadata PATCH to api backend (Wave 5) ([#12561](https://github.com/vm0-ai/vm0/issues/12561)) ([1fbaa00](https://github.com/vm0-ai/vm0/commit/1fbaa005166a28299f41f3eb9bf1381f4cebee2c))
* **api:** port custom-connectors create post to api backend ([#12524](https://github.com/vm0-ai/vm0/issues/12524)) ([b4421a8](https://github.com/vm0-ai/vm0/commit/b4421a8f8eebabd8c187879e79ffcb124bd729eb))
* **api:** port custom-connectors delete to api backend ([#12535](https://github.com/vm0-ai/vm0/issues/12535)) ([eee2bdc](https://github.com/vm0-ai/vm0/commit/eee2bdc7e626e934dfcd5c71f8354b13891f7b53))
* **api:** port integrations/telegram/message POST to api backend (Wave 5) ([#12580](https://github.com/vm0-ai/vm0/issues/12580)) ([98e3521](https://github.com/vm0-ai/vm0/commit/98e3521495a16569204289e06a66abd5554aba3a))
* **api:** port me/model-providers delete to api backend ([#12552](https://github.com/vm0-ai/vm0/issues/12552)) ([4fa5958](https://github.com/vm0-ai/vm0/commit/4fa59589f64793a28c9ae6dd850845efd9ecfafe))
* **api:** port member-cap evaluation for runs cancel credit reconciliation ([#12594](https://github.com/vm0-ai/vm0/issues/12594)) ([55870bd](https://github.com/vm0-ai/vm0/commit/55870bde9e060eb54c0d0b2103d31dbd19355005))
* **api:** port official telegram bot logic for parity with web ([#12378](https://github.com/vm0-ai/vm0/issues/12378)) ([a8ce3d7](https://github.com/vm0-ai/vm0/commit/a8ce3d74db51d11ffe43d7dc0a92bad524383046)), closes [#12290](https://github.com/vm0-ai/vm0/issues/12290) [#12370](https://github.com/vm0-ai/vm0/issues/12370)
* **api:** port secrets delete to api backend ([#12542](https://github.com/vm0-ai/vm0/issues/12542)) ([c2738af](https://github.com/vm0-ai/vm0/commit/c2738af9df9a12783a5143aaa12b976c09c3647b))
* **api:** port slack connect side effects ([#13117](https://github.com/vm0-ai/vm0/issues/13117)) ([bae9fc9](https://github.com/vm0-ai/vm0/commit/bae9fc913b5e5947553ca8437080e56795300bf2))
* **chat:** add append-only chat interrupt events ([#12404](https://github.com/vm0-ai/vm0/issues/12404)) ([947fb71](https://github.com/vm0-ai/vm0/commit/947fb714fa212a9d2dee6e8db6a50ea44800fad6))
* **chat:** add append-only queued message recall ([#12253](https://github.com/vm0-ai/vm0/issues/12253)) ([d094a8f](https://github.com/vm0-ai/vm0/commit/d094a8fb4103adc8e09b7e25bc796484d45b7281))
* switch zero model pickers to model-first ([#12286](https://github.com/vm0-ai/vm0/issues/12286)) ([4c0dafc](https://github.com/vm0-ai/vm0/commit/4c0dafcfef16f977d9dda8d4ed72c03aa8b310fb))


### Bug Fixes

* add missing id field and remove revoke filter from API thread messages ([#12339](https://github.com/vm0-ai/vm0/issues/12339)) ([26d28f2](https://github.com/vm0-ai/vm0/commit/26d28f224febb19de17741c3900176b37ba53ae1))
* align agent instructions route parity ([#12672](https://github.com/vm0-ai/vm0/issues/12672)) ([4d796b7](https://github.com/vm0-ai/vm0/commit/4d796b78025fb52132f0104fa295cb470e85c923))
* align v1 chat thread read route parity ([#12632](https://github.com/vm0-ai/vm0/issues/12632)) ([f0e9abd](https://github.com/vm0-ai/vm0/commit/f0e9abd379d9e8fc55bbd311e8a5cede3cf06330))
* align zero model provider route parity ([#12747](https://github.com/vm0-ai/vm0/issues/12747)) ([5864eca](https://github.com/vm0-ai/vm0/commit/5864ecab99087af29b1474036b750d8a46620080))
* align zero org read parity ([#12763](https://github.com/vm0-ai/vm0/issues/12763)) ([8ea3279](https://github.com/vm0-ai/vm0/commit/8ea32795aef6a69525f7759723b784a2703f0356))
* align zero skills route parity ([#12773](https://github.com/vm0-ai/vm0/issues/12773)) ([4cd4998](https://github.com/vm0-ai/vm0/commit/4cd4998d80b5dd04dd60faa20215939839015756))
* align zero usage insight route parity ([#12775](https://github.com/vm0-ai/vm0/issues/12775)) ([2580064](https://github.com/vm0-ai/vm0/commit/2580064aee8ba4b8a560073a7c28878abfae4efd))
* align zero web download parity ([#12780](https://github.com/vm0-ai/vm0/issues/12780)) ([8bea40a](https://github.com/vm0-ai/vm0/commit/8bea40a50b7b42876acf2250b196cb2ff78543c8))
* anchor cron schedule next run time ([#13138](https://github.com/vm0-ai/vm0/issues/13138)) ([b7c78e0](https://github.com/vm0-ai/vm0/commit/b7c78e0a9f423b055f69186741f4d841cd2aeef6))
* **api:** add modelProviderType/modelProviderCredentialScope to chat-thread detail ([#12252](https://github.com/vm0-ai/vm0/issues/12252)) ([a15af0e](https://github.com/vm0-ai/vm0/commit/a15af0e569dc16751eb431b675e4153156c9a409))
* **api:** add scopeMismatch/reinstallUrl to Slack shadow response ([#12277](https://github.com/vm0-ai/vm0/issues/12277)) ([61b03e5](https://github.com/vm0-ai/vm0/commit/61b03e5bb28d2bd6d359f76ce05bd4bc43617c14))
* **api:** align chat message env validation ([#13116](https://github.com/vm0-ai/vm0/issues/13116)) ([bcc1457](https://github.com/vm0-ai/vm0/commit/bcc145719f53cca232e0c496291e58cd49bebb56))
* **api:** align connector configured types ([#12306](https://github.com/vm0-ai/vm0/issues/12306)) ([771065b](https://github.com/vm0-ai/vm0/commit/771065bf8678c076e2632de83c0acb456d9d5684))
* **api:** drop visibility filter from zeroChatThreadMessagesPage ([#12498](https://github.com/vm0-ai/vm0/issues/12498)) ([26aca91](https://github.com/vm0-ai/vm0/commit/26aca9170d7e69418c3912065644f8aa104bf4da))
* **api:** exclude user-revoke ghost rows in visibleChatMessageCondition ([#12372](https://github.com/vm0-ai/vm0/issues/12372)) ([656e2ab](https://github.com/vm0-ai/vm0/commit/656e2ab8a5cacc14cb7c2c1c39d18faa4626b628))
* **api:** port axiom event watermark to mask indexing lag ([#12502](https://github.com/vm0-ai/vm0/issues/12502)) ([f79c79e](https://github.com/vm0-ai/vm0/commit/f79c79e353231372d78955bcf5a984adfcc1c187))
* **api:** port google drive artifact sync status to chat-threads artifacts get ([#12499](https://github.com/vm0-ai/vm0/issues/12499)) ([541165f](https://github.com/vm0-ai/vm0/commit/541165f97bacc3b3b93752e1655e7ccab9c67e3b)), closes [#12488](https://github.com/vm0-ai/vm0/issues/12488)
* **api:** preserve chat model provider selection ([#13156](https://github.com/vm0-ai/vm0/issues/13156)) ([241cfb8](https://github.com/vm0-ai/vm0/commit/241cfb8ce13d190b33abca4096ff829b5c8f62f0))
* **deps:** patch hono audit advisories ([#12257](https://github.com/vm0-ai/vm0/issues/12257)) ([8507e4a](https://github.com/vm0-ai/vm0/commit/8507e4a16a7f0c06e54a5c00c42384aeffde916a))
* pin model-first chat thread model ([#12740](https://github.com/vm0-ai/vm0/issues/12740)) ([de6006a](https://github.com/vm0-ai/vm0/commit/de6006ac76936e3f67257ac736e81a2c360b1c30))
* refresh connector auth state and catalog ([#12218](https://github.com/vm0-ai/vm0/issues/12218)) ([9cde9c6](https://github.com/vm0-ai/vm0/commit/9cde9c6dd39a3fe2bc266d681ae8c15227a15782))
* restore website docs and nav behavior ([#13123](https://github.com/vm0-ai/vm0/issues/13123)) ([6d2f45f](https://github.com/vm0-ai/vm0/commit/6d2f45f4870150fd9ac72773099721a68acbc1ac))
* route api axiom session queries to sessions token ([#12266](https://github.com/vm0-ai/vm0/issues/12266)) ([4de2fce](https://github.com/vm0-ai/vm0/commit/4de2fce52314c259978e1ddb2a8c81baae8d2abf))


### Refactoring

* **api:** migrate agent composes create route ([#13032](https://github.com/vm0-ai/vm0/issues/13032)) ([0fdd33b](https://github.com/vm0-ai/vm0/commit/0fdd33b6017440ea068c1125585f28866934e8d3))
* **api:** migrate agent instructions get ([#12409](https://github.com/vm0-ai/vm0/issues/12409)) ([c0a707b](https://github.com/vm0-ai/vm0/commit/c0a707b1cd2cadf6f08059a3bf8101c905fdf801))
* **api:** migrate agents by id get to api backend ([#12435](https://github.com/vm0-ai/vm0/issues/12435)) ([ccb5cac](https://github.com/vm0-ai/vm0/commit/ccb5cac48c0b8c25b901d1697f0b97cfd47a7bad))
* **api:** migrate agents custom-connectors put to api backend ([#12523](https://github.com/vm0-ai/vm0/issues/12523)) ([9d5c1b7](https://github.com/vm0-ai/vm0/commit/9d5c1b7d9bdcd8eb04b465cd60c6cfb0c21d2878))
* **api:** migrate agents list get ([#12431](https://github.com/vm0-ai/vm0/issues/12431)) ([e5acde9](https://github.com/vm0-ai/vm0/commit/e5acde91edb589968c450fd9adc46b18027f2b20))
* **api:** migrate agents user-connectors put to api backend ([#12581](https://github.com/vm0-ai/vm0/issues/12581)) ([0bc5a98](https://github.com/vm0-ai/vm0/commit/0bc5a98f1690426a44b06bff95da6f1cf7a87dc4))
* **api:** migrate api keys get to api backend ([#12357](https://github.com/vm0-ai/vm0/issues/12357)) ([d967a6c](https://github.com/vm0-ai/vm0/commit/d967a6cb1a9fbfc412deb897786b997e27187bc3)), closes [#12350](https://github.com/vm0-ai/vm0/issues/12350)
* **api:** migrate api-keys delete to api backend (wave 5) ([#12540](https://github.com/vm0-ai/vm0/issues/12540)) ([7c53ddf](https://github.com/vm0-ai/vm0/commit/7c53ddfa411183eb65f4ff86f44e60198a407a6b)), closes [#12538](https://github.com/vm0-ai/vm0/issues/12538)
* **api:** migrate billing auto-recharge get to api backend ([#12351](https://github.com/vm0-ai/vm0/issues/12351)) ([5686c5c](https://github.com/vm0-ai/vm0/commit/5686c5c2da47a4c71912c59073a8acb11c5effbf))
* **api:** migrate billing invoices get to api backend ([#12363](https://github.com/vm0-ai/vm0/issues/12363)) ([504c11a](https://github.com/vm0-ai/vm0/commit/504c11a585c681e2d5c15bc7504e87538c6f13c3))
* **api:** migrate billing status get to api backend ([#12353](https://github.com/vm0-ai/vm0/issues/12353)) ([351be15](https://github.com/vm0-ai/vm0/commit/351be15fdbb2a54e21c973e72d6b9ee4a59a8008)), closes [#12345](https://github.com/vm0-ai/vm0/issues/12345)
* **api:** migrate billing/portal post to api backend (wave 6 [#1](https://github.com/vm0-ai/vm0/issues/1)) ([#12670](https://github.com/vm0-ai/vm0/issues/12670)) ([7508575](https://github.com/vm0-ai/vm0/commit/750857546875646d151b0b7e0635440a0a34e1d8)), closes [#12595](https://github.com/vm0-ai/vm0/issues/12595)
* **api:** migrate chat callback ([#13111](https://github.com/vm0-ai/vm0/issues/13111)) ([4ff6f43](https://github.com/vm0-ai/vm0/commit/4ff6f4375712738a10f0495d26e7576ed660da29))
* **api:** migrate chat-threads artifacts sync to api backend (wave 5) ([#12563](https://github.com/vm0-ai/vm0/issues/12563)) ([d24b397](https://github.com/vm0-ai/vm0/commit/d24b3974f2f1bc30af83af27f390646ac3be4878)), closes [#12562](https://github.com/vm0-ai/vm0/issues/12562)
* **api:** migrate chat-threads delete [id] to api backend ([#12565](https://github.com/vm0-ai/vm0/issues/12565)) ([66ef7de](https://github.com/vm0-ai/vm0/commit/66ef7decc4b18a4c874ab6095cef8c004a2224af))
* **api:** migrate chat-threads post (create thread) to api backend ([#12553](https://github.com/vm0-ai/vm0/issues/12553)) ([0790f7d](https://github.com/vm0-ai/vm0/commit/0790f7d565440eac6da45fa37b99a2f74c712747))
* **api:** migrate chat-threads rename post to api backend ([#12516](https://github.com/vm0-ai/vm0/issues/12516)) ([96604b5](https://github.com/vm0-ai/vm0/commit/96604b58d91d1e30f94606239a202a7661239468))
* **api:** migrate chat-threads unpin post to api backend ([#12515](https://github.com/vm0-ai/vm0/issues/12515)) ([a9bcfba](https://github.com/vm0-ai/vm0/commit/a9bcfbad44cfb6d72a4177676776f4a1e6199060)), closes [#12514](https://github.com/vm0-ai/vm0/issues/12514)
* **api:** migrate cli auth routes ([#13033](https://github.com/vm0-ai/vm0/issues/13033)) ([a7c2a07](https://github.com/vm0-ai/vm0/commit/a7c2a07ef66882744298374231a64183c61923bc))
* **api:** migrate Codex OAuth model-provider routes ([#12956](https://github.com/vm0-ai/vm0/issues/12956)) ([721a18c](https://github.com/vm0-ai/vm0/commit/721a18c93b3994b0fc7d3ac0f0c8773386a5a69a))
* **api:** migrate composes by id get to api backend ([#12429](https://github.com/vm0-ai/vm0/issues/12429)) ([b061f46](https://github.com/vm0-ai/vm0/commit/b061f464e2d803cd90a19a8a91427a7a6f1933c0)), closes [#12428](https://github.com/vm0-ai/vm0/issues/12428)
* **api:** migrate composes by name get to api backend ([#12427](https://github.com/vm0-ai/vm0/issues/12427)) ([df66047](https://github.com/vm0-ai/vm0/commit/df66047b121c17400efbd57df59dcf39abb555fd))
* **api:** migrate composes delete to api backend (wave 5) ([#12548](https://github.com/vm0-ai/vm0/issues/12548)) ([f2e9359](https://github.com/vm0-ai/vm0/commit/f2e93593f8091c49cdc77271afac0d62ad7c7c93)), closes [#12544](https://github.com/vm0-ai/vm0/issues/12544)
* **api:** migrate composes list get to api backend ([#12415](https://github.com/vm0-ai/vm0/issues/12415)) ([ea06420](https://github.com/vm0-ai/vm0/commit/ea06420c7ce356d49c1f16fdf178caf64d869ac7))
* **api:** migrate computer use host get to api backend ([#12371](https://github.com/vm0-ai/vm0/issues/12371)) ([fe3a421](https://github.com/vm0-ai/vm0/commit/fe3a421e42e0515db80dd87ea09ff7173f81517a)), closes [#12367](https://github.com/vm0-ai/vm0/issues/12367)
* **api:** migrate connector oauth direct routes ([#12962](https://github.com/vm0-ai/vm0/issues/12962)) ([2293ee9](https://github.com/vm0-ai/vm0/commit/2293ee986e4e55f1004d6d58c8d5550c4938a203))
* **api:** migrate cron usage billing routes ([#13030](https://github.com/vm0-ai/vm0/issues/13030)) ([8bdee9c](https://github.com/vm0-ai/vm0/commit/8bdee9c022480628b42f809753963150ee4693c6))
* **api:** migrate custom-connectors delete secret to api backend ([#12532](https://github.com/vm0-ai/vm0/issues/12532)) ([2fc9e02](https://github.com/vm0-ai/vm0/commit/2fc9e02efb83579c63c1082d453e11890a7c6a75)), closes [#12531](https://github.com/vm0-ai/vm0/issues/12531)
* **api:** migrate custom-connectors list get to api backend ([#12392](https://github.com/vm0-ai/vm0/issues/12392)) ([076d707](https://github.com/vm0-ai/vm0/commit/076d70721621415ab2bbb8556fc4d6a9f97efe93))
* **api:** migrate custom-connectors patch [id] to api backend ([#12533](https://github.com/vm0-ai/vm0/issues/12533)) ([374097d](https://github.com/vm0-ai/vm0/commit/374097d077c280096a3850d2cceef10f6d4930ba))
* **api:** migrate default-agent put to api backend ([#12604](https://github.com/vm0-ai/vm0/issues/12604)) ([d51726c](https://github.com/vm0-ai/vm0/commit/d51726ca7a4fa6034e61022fd8197c4c70dd2694)), closes [#12290](https://github.com/vm0-ai/vm0/issues/12290) [#12598](https://github.com/vm0-ai/vm0/issues/12598)
* **api:** migrate email unsubscribe get route ([#13005](https://github.com/vm0-ai/vm0/issues/13005)) ([5fef14a](https://github.com/vm0-ai/vm0/commit/5fef14ae4d87fa7894436d83de6a073acbb0c6d2))
* **api:** migrate email unsubscribe route ([#13010](https://github.com/vm0-ai/vm0/issues/13010)) ([6b6ef71](https://github.com/vm0-ai/vm0/commit/6b6ef71b5e34070925c36b9dbd6bcf90d073ef77))
* **api:** migrate feature switches get ([#12335](https://github.com/vm0-ai/vm0/issues/12335)) ([87c69cc](https://github.com/vm0-ai/vm0/commit/87c69cce5490d7a7511359af5642f1d77763da90))
* **api:** migrate feature-switches post + delete to api backend ([#12546](https://github.com/vm0-ai/vm0/issues/12546)) ([8107427](https://github.com/vm0-ai/vm0/commit/810742718741213be6b0bd99906796771762d446))
* **api:** migrate github integration delete route ([#12954](https://github.com/vm0-ai/vm0/issues/12954)) ([399dfe5](https://github.com/vm0-ai/vm0/commit/399dfe5f57514e3e7cad840f297643b4d5adceed))
* **api:** migrate github issues callback ([#13085](https://github.com/vm0-ai/vm0/issues/13085)) ([5d627c1](https://github.com/vm0-ai/vm0/commit/5d627c1ef7bf243003e5192f9adeaf3447699a34))
* **api:** migrate github oauth get routes ([#12986](https://github.com/vm0-ai/vm0/issues/12986)) ([ca4b7f1](https://github.com/vm0-ai/vm0/commit/ca4b7f1964f4762044a612ee867868166940fecf))
* **api:** migrate insights get ([#12369](https://github.com/vm0-ai/vm0/issues/12369)) ([1ed312e](https://github.com/vm0-ai/vm0/commit/1ed312ebda451ebf8528bdc0bf3e17889364fff8))
* **api:** migrate insights range get ([#12376](https://github.com/vm0-ai/vm0/issues/12376)) ([65d16b2](https://github.com/vm0-ai/vm0/commit/65d16b2fbfe230bb85e6e9c73690c8d6a97fe15d))
* **api:** migrate internal agent callback ([#13077](https://github.com/vm0-ai/vm0/issues/13077)) ([b40a430](https://github.com/vm0-ai/vm0/commit/b40a4301b30c5abee3d544fa282bad636b21c975))
* **api:** migrate internal event consumers ([#13006](https://github.com/vm0-ai/vm0/issues/13006)) ([90a0043](https://github.com/vm0-ai/vm0/commit/90a0043d4ddccfd9599c4d16f305742abe6092fe))
* **api:** migrate internal schedule callbacks ([#13084](https://github.com/vm0-ai/vm0/issues/13084)) ([f11641a](https://github.com/vm0-ai/vm0/commit/f11641a748d784f518d19043b32893bfa40b61b5))
* **api:** migrate me/model-providers patch model to api backend (wave 5) ([#12559](https://github.com/vm0-ai/vm0/issues/12559)) ([097f4a4](https://github.com/vm0-ai/vm0/commit/097f4a449d1537ff308c51976f26a5899301537e)), closes [#12556](https://github.com/vm0-ai/vm0/issues/12556)
* **api:** migrate member credit cap get ([#12383](https://github.com/vm0-ai/vm0/issues/12383)) ([9c6c779](https://github.com/vm0-ai/vm0/commit/9c6c7794ae8e86be1a3f46fe40d970be6b936b7b))
* **api:** migrate model provider model update route ([#13016](https://github.com/vm0-ai/vm0/issues/13016)) ([bbc8684](https://github.com/vm0-ai/vm0/commit/bbc8684df65753a527285e9151befdbb3997ff1f))
* **api:** migrate model providers list get to api backend ([#12391](https://github.com/vm0-ai/vm0/issues/12391)) ([2bc1348](https://github.com/vm0-ai/vm0/commit/2bc1348546796fda261826db060aadc6a988a294)), closes [#12387](https://github.com/vm0-ai/vm0/issues/12387)
* **api:** migrate onboarding status get to api backend ([#12338](https://github.com/vm0-ai/vm0/issues/12338)) ([61e11e8](https://github.com/vm0-ai/vm0/commit/61e11e8ca7f8de10543eb3b9254b1e3f85fb2c5a)), closes [#12333](https://github.com/vm0-ai/vm0/issues/12333)
* **api:** migrate org domains list get to api backend ([#12440](https://github.com/vm0-ai/vm0/issues/12440)) ([2c15a05](https://github.com/vm0-ai/vm0/commit/2c15a05dff7013d186cb774aad93942abc4f73c9)), closes [#12437](https://github.com/vm0-ai/vm0/issues/12437)
* **api:** migrate org get to api backend ([#12449](https://github.com/vm0-ai/vm0/issues/12449)) ([325fe7a](https://github.com/vm0-ai/vm0/commit/325fe7a78cac71e1e4b9d7d7c459659b51ed05c9))
* **api:** migrate org list get to api backend ([#12433](https://github.com/vm0-ai/vm0/issues/12433)) ([9b6d0b0](https://github.com/vm0-ai/vm0/commit/9b6d0b03d334acf78e4654f703b39f290ff13b0a)), closes [#12432](https://github.com/vm0-ai/vm0/issues/12432)
* **api:** migrate org members get to api backend ([#12450](https://github.com/vm0-ai/vm0/issues/12450)) ([724045d](https://github.com/vm0-ai/vm0/commit/724045dc878e6ea647408bc4cdac417f03d19a2d)), closes [#12443](https://github.com/vm0-ai/vm0/issues/12443)
* **api:** migrate org/invite post to api backend ([#12607](https://github.com/vm0-ai/vm0/issues/12607)) ([2218e92](https://github.com/vm0-ai/vm0/commit/2218e92a10afada7f8b63a7c822b93ff8d2a3956))
* **api:** migrate permission access create route ([#12959](https://github.com/vm0-ai/vm0/issues/12959)) ([ed4df55](https://github.com/vm0-ai/vm0/commit/ed4df55ca31c697f2c67a4758a7b7bde565eaf56)), closes [#12883](https://github.com/vm0-ai/vm0/issues/12883)
* **api:** migrate permission access resolve route ([#12938](https://github.com/vm0-ai/vm0/issues/12938)) ([4f999a5](https://github.com/vm0-ai/vm0/commit/4f999a53da9a0d89ddb22d4da81b4294dd522168))
* **api:** migrate run agent events get to api backend ([#12422](https://github.com/vm0-ai/vm0/issues/12422)) ([75f4efa](https://github.com/vm0-ai/vm0/commit/75f4efaca4354a0c57f64e69d47a1b72cee974a2))
* **api:** migrate run context get ([#12420](https://github.com/vm0-ai/vm0/issues/12420)) ([fc9cc36](https://github.com/vm0-ai/vm0/commit/fc9cc367b9fbe67fa17b670353e86c36a267b985))
* **api:** migrate run network logs get to api backend ([#12421](https://github.com/vm0-ai/vm0/issues/12421)) ([f2bd43b](https://github.com/vm0-ai/vm0/commit/f2bd43b86783e625f06b489ac6deb86802b3ed89)), closes [#12417](https://github.com/vm0-ai/vm0/issues/12417)
* **api:** migrate runner post routes ([#13001](https://github.com/vm0-ai/vm0/issues/13001)) ([d352abb](https://github.com/vm0-ai/vm0/commit/d352abb0dae68703da190d98c82dc67653b7a15c))
* **api:** migrate runs cancel to api backend (wave 5) ([#12577](https://github.com/vm0-ai/vm0/issues/12577)) ([bc6f2e7](https://github.com/vm0-ai/vm0/commit/bc6f2e7b865804c5673ea0f1a0cdc9a390a15c58)), closes [#12570](https://github.com/vm0-ai/vm0/issues/12570)
* **api:** migrate runs get-by-id ([#12414](https://github.com/vm0-ai/vm0/issues/12414)) ([472839e](https://github.com/vm0-ai/vm0/commit/472839e416d1d879eb4d83ffddb691dbb9934b90))
* **api:** migrate runs queue get to api backend ([#12402](https://github.com/vm0-ai/vm0/issues/12402)) ([60df3d2](https://github.com/vm0-ai/vm0/commit/60df3d24a092e9570f5de615cba621a53579b207))
* **api:** migrate runs runner get to api backend ([#12408](https://github.com/vm0-ai/vm0/issues/12408)) ([73e76c8](https://github.com/vm0-ai/vm0/commit/73e76c897412e5724568913abffa724c851d7624))
* **api:** migrate schedules list get to api backend ([#12393](https://github.com/vm0-ai/vm0/issues/12393)) ([f9da2eb](https://github.com/vm0-ai/vm0/commit/f9da2eb63fc3b3860396d75c23d38ef740c5bc18)), closes [#12389](https://github.com/vm0-ai/vm0/issues/12389)
* **api:** migrate secrets get to api backend ([#12377](https://github.com/vm0-ai/vm0/issues/12377)) ([ce5bf36](https://github.com/vm0-ai/vm0/commit/ce5bf363e103188c3fa5e76935f4e92e89cdbe8f))
* **api:** migrate skill detail get to api backend ([#12401](https://github.com/vm0-ai/vm0/issues/12401)) ([95a2893](https://github.com/vm0-ai/vm0/commit/95a289332ed91629c5f9b8c9a8b9a3b4564d06f7)), closes [#12398](https://github.com/vm0-ai/vm0/issues/12398)
* **api:** migrate skills list get ([#12388](https://github.com/vm0-ai/vm0/issues/12388)) ([f171574](https://github.com/vm0-ai/vm0/commit/f171574f50649eb989c71577f8537573cbd41a55))
* **api:** migrate slack channels get to api backend ([#12385](https://github.com/vm0-ai/vm0/issues/12385)) ([f0f2bba](https://github.com/vm0-ai/vm0/commit/f0f2bbac33aa5e0e6076a481a356268164631fd7)), closes [#12380](https://github.com/vm0-ai/vm0/issues/12380)
* **api:** migrate slack connect status get to api backend ([#12384](https://github.com/vm0-ai/vm0/issues/12384)) ([27d8bb8](https://github.com/vm0-ai/vm0/commit/27d8bb89a990324ec8e198e75cdec378b0fdac74))
* **api:** migrate slack integration delete route ([#12991](https://github.com/vm0-ai/vm0/issues/12991)) ([ffa5290](https://github.com/vm0-ai/vm0/commit/ffa5290b227dc8a162af3a06aa13b2e0a23ec9e2))
* **api:** migrate slack integration status get to api backend ([#12399](https://github.com/vm0-ai/vm0/issues/12399)) ([db594c0](https://github.com/vm0-ai/vm0/commit/db594c0488c1a1c7c509566dd2afdc29699463f5)), closes [#12396](https://github.com/vm0-ai/vm0/issues/12396)
* **api:** migrate slack org callback ([#13099](https://github.com/vm0-ai/vm0/issues/13099)) ([cd9abe1](https://github.com/vm0-ai/vm0/commit/cd9abe1a7c7b27b561cecd0f845a4ca213a16b41))
* **api:** migrate slack state delete route ([#12968](https://github.com/vm0-ai/vm0/issues/12968)) ([4f84a71](https://github.com/vm0-ai/vm0/commit/4f84a7178a54373dffcfb0d7e5c0f004dadfdfe4))
* **api:** migrate slack webhooks ([#13145](https://github.com/vm0-ai/vm0/issues/13145)) ([280d359](https://github.com/vm0-ai/vm0/commit/280d359fc085cbd309ee80788296ad61d2d60ee9))
* **api:** migrate storage write routes ([#13002](https://github.com/vm0-ai/vm0/issues/13002)) ([8e6e5db](https://github.com/vm0-ai/vm0/commit/8e6e5dbe47ef05054d443d54c16f61b601890306))
* **api:** migrate team get to api backend ([#12337](https://github.com/vm0-ai/vm0/issues/12337)) ([c065931](https://github.com/vm0-ai/vm0/commit/c065931b5e5cd9cafd7db7ccfa2f5a77ae95ca98))
* **api:** migrate telegram bots list get to api backend ([#12405](https://github.com/vm0-ai/vm0/issues/12405)) ([722f9f7](https://github.com/vm0-ai/vm0/commit/722f9f7e3e3b48784d44e01416ae0cb173622aa2)), closes [#12366](https://github.com/vm0-ai/vm0/issues/12366)
* **api:** migrate telegram callback ([#13093](https://github.com/vm0-ai/vm0/issues/13093)) ([755e1bb](https://github.com/vm0-ai/vm0/commit/755e1bbad99763927c8233923c7d1ed040fb80e2))
* **api:** migrate telegram integration get routes ([#12969](https://github.com/vm0-ai/vm0/issues/12969)) ([4e62786](https://github.com/vm0-ai/vm0/commit/4e62786c07b510166073c740552b4b7fec5b90e6))
* **api:** migrate telegram integration patch route ([#13013](https://github.com/vm0-ai/vm0/issues/13013)) ([6b8f1e9](https://github.com/vm0-ai/vm0/commit/6b8f1e9c69d40a7410ac30ac2866c5293668f733))
* **api:** migrate telegram mock route ([#12995](https://github.com/vm0-ai/vm0/issues/12995)) ([7c7d409](https://github.com/vm0-ai/vm0/commit/7c7d4095ef24e9dc2343b83853da58e32081156f))
* **api:** migrate telegram test state seeding ([#12985](https://github.com/vm0-ai/vm0/issues/12985)) ([96b8fbb](https://github.com/vm0-ai/vm0/commit/96b8fbb62b7f6b3d55a322a8bbcd3a77df8cdb69))
* **api:** migrate test slack state post route ([#12988](https://github.com/vm0-ai/vm0/issues/12988)) ([1a77b71](https://github.com/vm0-ai/vm0/commit/1a77b71818739e448f2bfa9529656c48421fdf36))
* **api:** migrate test telegram state delete route ([#12977](https://github.com/vm0-ai/vm0/issues/12977)) ([5ade3b3](https://github.com/vm0-ai/vm0/commit/5ade3b3dcaebeb32e6fa7d15c9975c306a334601))
* **api:** migrate uploads complete post to api backend ([#12592](https://github.com/vm0-ai/vm0/issues/12592)) ([4b1f30f](https://github.com/vm0-ai/vm0/commit/4b1f30f890e7c62bf68b335081e7a1b5c9d5b5cb))
* **api:** migrate uploads/prepare post to api backend (Wave 5) ([#12590](https://github.com/vm0-ai/vm0/issues/12590)) ([37bc690](https://github.com/vm0-ai/vm0/commit/37bc690f6744a96b48412b6a172e91e7e79fa3ec))
* **api:** migrate usage insight get ([#12356](https://github.com/vm0-ai/vm0/issues/12356)) ([3f31844](https://github.com/vm0-ai/vm0/commit/3f31844fdd3e485b813da1f8a52123451eed5047))
* **api:** migrate usage route to api backend ([#12906](https://github.com/vm0-ai/vm0/issues/12906)) ([df42008](https://github.com/vm0-ai/vm0/commit/df42008a4dd9fece0a021e35c957ff343f713285))
* **api:** migrate user connectors get ([#12439](https://github.com/vm0-ai/vm0/issues/12439)) ([de02718](https://github.com/vm0-ai/vm0/commit/de027181f14feb883b5eefcc07e7fd2e0c126375))
* **api:** migrate user export POST ([#13034](https://github.com/vm0-ai/vm0/issues/13034)) ([193fed0](https://github.com/vm0-ai/vm0/commit/193fed08017d9767be51c73ae5d083e761917447))
* **api:** migrate user preferences get ([#12312](https://github.com/vm0-ai/vm0/issues/12312)) ([baf0445](https://github.com/vm0-ai/vm0/commit/baf0445c9d4305fb696f71564bc647ee96bdf0ff))
* **api:** migrate user preferences post ([#12315](https://github.com/vm0-ai/vm0/issues/12315)) ([c0788c4](https://github.com/vm0-ai/vm0/commit/c0788c45d478503c94adc9c332d8f6dd94f9fdf4))
* **api:** migrate variables list get ([#12397](https://github.com/vm0-ai/vm0/issues/12397)) ([3953c2f](https://github.com/vm0-ai/vm0/commit/3953c2f154c140db62b50f0e06a1659825e039d4))
* **api:** migrate voice chat list tasks get to api backend ([#12464](https://github.com/vm0-ai/vm0/issues/12464)) ([2c8bf7e](https://github.com/vm0-ai/vm0/commit/2c8bf7e020083701d4be11577944f5f489dcac8c)), closes [#12458](https://github.com/vm0-ai/vm0/issues/12458)
* **api:** migrate voice chat post routes ([#13039](https://github.com/vm0-ai/vm0/issues/13039)) ([417be66](https://github.com/vm0-ai/vm0/commit/417be6633818d5a80796e277c6d4eacab335343f))
* **api:** migrate voice-chat callback ([#13105](https://github.com/vm0-ai/vm0/issues/13105)) ([bdc1367](https://github.com/vm0-ai/vm0/commit/bdc1367cf833a912f4e320c21c05af2a5893c71a))
* **api:** migrate voice-chat get session get to api backend ([#12460](https://github.com/vm0-ai/vm0/issues/12460)) ([9c9f0d8](https://github.com/vm0-ai/vm0/commit/9c9f0d8b7e34bec3267c327560b52a2b60cae278))
* **api:** migrate voice-chat list-sessions get to api backend ([#12448](https://github.com/vm0-ai/vm0/issues/12448)) ([8be77ab](https://github.com/vm0-ai/vm0/commit/8be77ab96c1712c4babf219e3a33a2cd51104d25))
* **api:** migrate zero agent update routes to api backend ([#12940](https://github.com/vm0-ai/vm0/issues/12940)) ([83758da](https://github.com/vm0-ai/vm0/commit/83758dadb4386cb00efb337bd9066b0f9083158c))
* **api:** migrate zero agents delete route ([#12983](https://github.com/vm0-ai/vm0/issues/12983)) ([1a7b5af](https://github.com/vm0-ai/vm0/commit/1a7b5af6c0bf2e59909c6787b8cb54795354626c))
* **api:** migrate zero agents patch route ([#13020](https://github.com/vm0-ai/vm0/issues/13020)) ([45663c9](https://github.com/vm0-ai/vm0/commit/45663c9ec30e3a1b493326a81e568583d933ef75))
* **api:** migrate zero api key creation ([#12993](https://github.com/vm0-ai/vm0/issues/12993)) ([34a915d](https://github.com/vm0-ai/vm0/commit/34a915d77fcd5b1a2158c0253e2db32e862fced8))
* **api:** migrate zero chat search get to api backend ([#12494](https://github.com/vm0-ai/vm0/issues/12494)) ([a21a72a](https://github.com/vm0-ai/vm0/commit/a21a72a6c86d74c43653c435532b074661e376c6)), closes [#12491](https://github.com/vm0-ai/vm0/issues/12491)
* **api:** migrate zero chat thread messages get to api backend ([#12492](https://github.com/vm0-ai/vm0/issues/12492)) ([7c3b418](https://github.com/vm0-ai/vm0/commit/7c3b41839c2feb30a2dcaf6149445f806e8454dd))
* **api:** migrate zero chat threads artifacts list get to api backend ([#12489](https://github.com/vm0-ai/vm0/issues/12489)) ([bf4d50b](https://github.com/vm0-ai/vm0/commit/bf4d50bb44bf29cc8a8f720a9c5e6b4d62c2af95)), closes [#12486](https://github.com/vm0-ai/vm0/issues/12486) [#12488](https://github.com/vm0-ai/vm0/issues/12488)
* **api:** migrate zero chat threads get by id to api backend ([#12487](https://github.com/vm0-ai/vm0/issues/12487)) ([549b84b](https://github.com/vm0-ai/vm0/commit/549b84b92d800475f85524668fe4817c70dded6b)), closes [#12484](https://github.com/vm0-ai/vm0/issues/12484)
* **api:** migrate zero chat threads list get to api backend ([#12485](https://github.com/vm0-ai/vm0/issues/12485)) ([64858fa](https://github.com/vm0-ai/vm0/commit/64858fadaaca5780c50fcd3e0e5219e9ebe07b59)), closes [#12482](https://github.com/vm0-ai/vm0/issues/12482)
* **api:** migrate zero connector authorize routes ([#12910](https://github.com/vm0-ai/vm0/issues/12910)) ([f122f40](https://github.com/vm0-ai/vm0/commit/f122f40dc126240b232902e37829271b1e1c11ff))
* **api:** migrate zero connector deletes ([#12989](https://github.com/vm0-ai/vm0/issues/12989)) ([2a2706e](https://github.com/vm0-ai/vm0/commit/2a2706e8d61272ad7697f7ecb2aab737473cbbf9))
* **api:** migrate zero connectors by type get to api backend ([#12479](https://github.com/vm0-ai/vm0/issues/12479)) ([f071e6b](https://github.com/vm0-ai/vm0/commit/f071e6b636c248e6fdd7c939db8ef27a24a9463d)), closes [#12476](https://github.com/vm0-ai/vm0/issues/12476)
* **api:** migrate zero connectors computer get to api backend ([#12473](https://github.com/vm0-ai/vm0/issues/12473)) ([442a1a7](https://github.com/vm0-ai/vm0/commit/442a1a768b1f115765fc4bf7d08a3128e534ca3c)), closes [#12471](https://github.com/vm0-ai/vm0/issues/12471)
* **api:** migrate zero connectors list get to api backend ([#12467](https://github.com/vm0-ai/vm0/issues/12467)) ([535e9a7](https://github.com/vm0-ai/vm0/commit/535e9a7baba6a3d93f50f8779a62ce3a7d94ffd5))
* **api:** migrate zero connectors scope diff get to api backend ([#12480](https://github.com/vm0-ai/vm0/issues/12480)) ([52431bb](https://github.com/vm0-ai/vm0/commit/52431bbf9a7391a0cc29f8943137855dee2c6df4))
* **api:** migrate zero connectors search get to api backend ([#12474](https://github.com/vm0-ai/vm0/issues/12474)) ([3ca8039](https://github.com/vm0-ai/vm0/commit/3ca80390be85d1ca0f622d46c931e7f5c9c6b41c))
* **api:** migrate zero developer support route ([#12984](https://github.com/vm0-ai/vm0/issues/12984)) ([2c23fcf](https://github.com/vm0-ai/vm0/commit/2c23fcf0b842b08ffc6e0c8ff781263cd84ed555))
* **api:** migrate zero image io generate route ([#13061](https://github.com/vm0-ai/vm0/issues/13061)) ([8976c68](https://github.com/vm0-ai/vm0/commit/8976c68a6a2a277cc75982810b2a9331e5a1d77f))
* **api:** migrate zero logs get by id to api backend ([#12478](https://github.com/vm0-ai/vm0/issues/12478)) ([2328045](https://github.com/vm0-ai/vm0/commit/23280452e5b7f3dc7e264a888d54215bbc51e883)), closes [#12475](https://github.com/vm0-ai/vm0/issues/12475)
* **api:** migrate zero logs list get to api backend ([#12469](https://github.com/vm0-ai/vm0/issues/12469)) ([4f0a3c3](https://github.com/vm0-ai/vm0/commit/4f0a3c36b3a9c64eeb138498289603d587a9714d)), closes [#12465](https://github.com/vm0-ai/vm0/issues/12465)
* **api:** migrate zero logs search get to api backend ([#12483](https://github.com/vm0-ai/vm0/issues/12483)) ([8e21a71](https://github.com/vm0-ai/vm0/commit/8e21a71653e2031050640ca52f1523ef1e368780))
* **api:** migrate zero model providers delete route ([#12990](https://github.com/vm0-ai/vm0/issues/12990)) ([9cd2a73](https://github.com/vm0-ai/vm0/commit/9cd2a73ca2a477ee0cb49a0146cda591e6610507))
* **api:** migrate zero onboarding setup route ([#12975](https://github.com/vm0-ai/vm0/issues/12975)) ([a99038b](https://github.com/vm0-ai/vm0/commit/a99038ba5394dccfeeb2428171eaa9ff4ed20301))
* **api:** migrate zero org delete route ([#12973](https://github.com/vm0-ai/vm0/issues/12973)) ([7e4033e](https://github.com/vm0-ai/vm0/commit/7e4033e48ccbfbc87db90a46774887aa29da2c13))
* **api:** migrate zero org domain verification ([#13009](https://github.com/vm0-ai/vm0/issues/13009)) ([42174f2](https://github.com/vm0-ai/vm0/commit/42174f23f3729410f6f831eb779da71d7f6cd5ba))
* **api:** migrate zero org domains add route ([#12966](https://github.com/vm0-ai/vm0/issues/12966)) ([20677d6](https://github.com/vm0-ai/vm0/commit/20677d68d455a18f778566efe9f904bc5b4cb16a))
* **api:** migrate zero org domains delete route ([#12992](https://github.com/vm0-ai/vm0/issues/12992)) ([4a1f844](https://github.com/vm0-ai/vm0/commit/4a1f84484a0af16f8c39ff87560a5f7c926e9d05))
* **api:** migrate zero org leave route ([#12963](https://github.com/vm0-ai/vm0/issues/12963)) ([e6271ef](https://github.com/vm0-ai/vm0/commit/e6271efe807772850185e808ef7446e549fb79f2))
* **api:** migrate zero org logo upload route ([#12953](https://github.com/vm0-ai/vm0/issues/12953)) ([dee447f](https://github.com/vm0-ai/vm0/commit/dee447f07b6423fa426e41a3bef885f2d0d0f633))
* **api:** migrate zero org members delete route ([#13003](https://github.com/vm0-ai/vm0/issues/13003)) ([6a1dcb2](https://github.com/vm0-ai/vm0/commit/6a1dcb2fed5869df5983c68e0999bc2d588acfb5))
* **api:** migrate zero org members patch ([#13029](https://github.com/vm0-ai/vm0/issues/13029)) ([659cff6](https://github.com/vm0-ai/vm0/commit/659cff699968e2e2d26ba6f4f865170c98c01302))
* **api:** migrate zero org update route ([#12942](https://github.com/vm0-ai/vm0/issues/12942)) ([2993177](https://github.com/vm0-ai/vm0/commit/2993177a164a592a4782aea1e9ef92ea6a4f496e))
* **api:** migrate zero queue-position get to api backend ([#12336](https://github.com/vm0-ai/vm0/issues/12336)) ([5e4eee2](https://github.com/vm0-ai/vm0/commit/5e4eee257ea1ce6543379e1d220826cdf99ba4f3)), closes [#12332](https://github.com/vm0-ai/vm0/issues/12332)
* **api:** migrate zero realtime token route ([#12955](https://github.com/vm0-ai/vm0/issues/12955)) ([d5d74f0](https://github.com/vm0-ai/vm0/commit/d5d74f0ea9b1709f6663471e98e7084d084fb3bb))
* **api:** migrate zero report-error route ([#12961](https://github.com/vm0-ai/vm0/issues/12961)) ([f6a0127](https://github.com/vm0-ai/vm0/commit/f6a012768ed0939c2cabce390a0d7f0941e9188a))
* **api:** migrate zero runs create route ([#13076](https://github.com/vm0-ai/vm0/issues/13076)) ([2b64ac7](https://github.com/vm0-ai/vm0/commit/2b64ac71d8ac51509b1953d40fe140b707a2d444))
* **api:** migrate zero schedules delete route ([#12999](https://github.com/vm0-ai/vm0/issues/12999)) ([74c2817](https://github.com/vm0-ai/vm0/commit/74c28173061133bbfaabe6e10e5734b83eba95c2))
* **api:** migrate zero secrets post route ([#12946](https://github.com/vm0-ai/vm0/issues/12946)) ([bf2e7bf](https://github.com/vm0-ai/vm0/commit/bf2e7bffc08c3bc83be8dc5e04388955b5b9c1e4))
* **api:** migrate zero skill deletion ([#13004](https://github.com/vm0-ai/vm0/issues/13004)) ([1e962d2](https://github.com/vm0-ai/vm0/commit/1e962d2d80acb6b6e5d2d039a83358c19ca69183))
* **api:** migrate zero skills create route ([#12952](https://github.com/vm0-ai/vm0/issues/12952)) ([a9f063c](https://github.com/vm0-ai/vm0/commit/a9f063c85e9c217f5ee89b7ad46ad46efca5ac28))
* **api:** migrate zero skills update route ([#12913](https://github.com/vm0-ai/vm0/issues/12913)) ([fe3000e](https://github.com/vm0-ai/vm0/commit/fe3000effede31da8b96643cf0d2491b6a11aaa2))
* **api:** migrate zero slack oauth routes ([#12958](https://github.com/vm0-ai/vm0/issues/12958)) ([7e76cde](https://github.com/vm0-ai/vm0/commit/7e76cde7a3ee7ee8358b7cdd5b060d265f41f9fc))
* **api:** migrate zero variables post route ([#12945](https://github.com/vm0-ai/vm0/issues/12945)) ([8d4607d](https://github.com/vm0-ai/vm0/commit/8d4607d2d11e737d8d9d0e4343bdee2bf905aa1d))
* **api:** port runs cancel credit reconciliation atomic core (wave 5 follow-up) ([#12585](https://github.com/vm0-ai/vm0/issues/12585)) ([beee285](https://github.com/vm0-ai/vm0/commit/beee28545c51bf9098569c6b9145ec96cac97b8d))
* **api:** port runs cancel queue-drain (wave 5 follow-up) ([#12582](https://github.com/vm0-ai/vm0/issues/12582)) ([46ce11e](https://github.com/vm0-ai/vm0/commit/46ce11eb79bae216df1f1ec899b63e52bd1c1c4a))
* **api:** port stripe auto-recharge for runs cancel (wave 5 cascade) ([#12593](https://github.com/vm0-ai/vm0/issues/12593)) ([b6b5d8b](https://github.com/vm0-ai/vm0/commit/b6b5d8b37c7f78e7e99f2e670fe8cb794045b436)), closes [#12587](https://github.com/vm0-ai/vm0/issues/12587)
* make codex providers feature-switch free ([#13126](https://github.com/vm0-ai/vm0/issues/13126)) ([6a3e7b3](https://github.com/vm0-ai/vm0/commit/6a3e7b37ff6fb0cd473bd72f61ff80e6ca74195f))
* make zero model-first only ([#13017](https://github.com/vm0-ai/vm0/issues/13017)) ([9bcb323](https://github.com/vm0-ai/vm0/commit/9bcb323d6e2c32dfdd2d1bf9fa63d0d2bf9e1ef1))
* migrate agent checkpoints route to api ([#12914](https://github.com/vm0-ai/vm0/issues/12914)) ([004e3c6](https://github.com/vm0-ai/vm0/commit/004e3c6ff61164a62f926adddcbcd094b1093941))
* migrate agent compose delete route ([#12915](https://github.com/vm0-ai/vm0/issues/12915)) ([08408d6](https://github.com/vm0-ai/vm0/commit/08408d6756e737fb9c922757bd8b1be6012f635a))
* migrate agent composes read routes to api ([#12950](https://github.com/vm0-ai/vm0/issues/12950)) ([bc0a2fb](https://github.com/vm0-ai/vm0/commit/bc0a2fb55b133e044c0dc991cfc50d5c95dc9d42))
* migrate agent run telemetry to api ([#12981](https://github.com/vm0-ai/vm0/issues/12981)) ([451d2b5](https://github.com/vm0-ai/vm0/commit/451d2b5a44a878f0f4ce048424790ef2f1f90cb5))
* migrate agent runs read routes to api ([#12974](https://github.com/vm0-ai/vm0/issues/12974)) ([edcb5a4](https://github.com/vm0-ai/vm0/commit/edcb5a41dec38adfce88a822812b14cf15182c18))
* migrate agent sessions route to api ([#12939](https://github.com/vm0-ai/vm0/issues/12939)) ([f11ea4c](https://github.com/vm0-ai/vm0/commit/f11ea4c3c8916e942706b719d42fb2522b1fe5f4))
* migrate auth me GET to api backend ([#12911](https://github.com/vm0-ai/vm0/issues/12911)) ([9140e92](https://github.com/vm0-ai/vm0/commit/9140e92ee8be732e8e0a3421b516169cf0910181))
* migrate generate image route to api ([#13012](https://github.com/vm0-ai/vm0/issues/13012)) ([1718609](https://github.com/vm0-ai/vm0/commit/171860936b1f0f585209db68ad302d1dc9b320f4))
* migrate github integration status to api ([#12976](https://github.com/vm0-ai/vm0/issues/12976)) ([bdf0270](https://github.com/vm0-ai/vm0/commit/bdf0270487661b5d8f44aac480e75ddcd651682b))
* migrate integrations chat message route to api ([#12978](https://github.com/vm0-ai/vm0/issues/12978)) ([12a4171](https://github.com/vm0-ai/vm0/commit/12a41718f155c7e9c19a6c4b58898c656ee1fb7e))
* migrate logs search to api ([#12960](https://github.com/vm0-ai/vm0/issues/12960)) ([fc42cf7](https://github.com/vm0-ai/vm0/commit/fc42cf7e4c7a78fe9d3eaf3c1c40acb28a52c20a))
* migrate permission access request list route ([#12904](https://github.com/vm0-ai/vm0/issues/12904)) ([44e5f1e](https://github.com/vm0-ai/vm0/commit/44e5f1eccdbcaa7bfdbc88cf31f2e64adbc6ac28))
* migrate slack mock test routes to api ([#12996](https://github.com/vm0-ai/vm0/issues/12996)) ([453e60f](https://github.com/vm0-ai/vm0/commit/453e60f4e70305fc86896e539430030bc861e073))
* migrate storage GET routes to api backend ([#12957](https://github.com/vm0-ai/vm0/issues/12957)) ([1fe70fb](https://github.com/vm0-ai/vm0/commit/1fe70fb9ff07ceaf9f986816f8879d1f7a86e034))
* migrate telegram delete routes to api ([#12965](https://github.com/vm0-ai/vm0/issues/12965)) ([77881e0](https://github.com/vm0-ai/vm0/commit/77881e0342dd7489b5866e8c9c4d263efb137743))
* migrate test oauth provider get routes to api ([#12916](https://github.com/vm0-ai/vm0/issues/12916)) ([37019ca](https://github.com/vm0-ai/vm0/commit/37019ca6abb6bb29a0d391976e6377bc2e2dd83c))
* migrate test slack state get to api ([#12948](https://github.com/vm0-ai/vm0/issues/12948)) ([0e8ff89](https://github.com/vm0-ai/vm0/commit/0e8ff89ef99316ad6dfc0291e517db2d1eead220))
* migrate test telegram state GET to api backend ([#12943](https://github.com/vm0-ai/vm0/issues/12943)) ([e1ad37d](https://github.com/vm0-ai/vm0/commit/e1ad37d29feae5b567237e4f06510da4b832554f))
* migrate user export status to api ([#12949](https://github.com/vm0-ai/vm0/issues/12949)) ([0286e19](https://github.com/vm0-ai/vm0/commit/0286e19438623b2a84f2b898e93655c3fdb270d2))
* migrate v1 chat message send to api ([#13038](https://github.com/vm0-ai/vm0/issues/13038)) ([bf1a41e](https://github.com/vm0-ai/vm0/commit/bf1a41e56e05fad9b1b2487ae8f15f3d175b5877))
* migrate voice IO quota GET to api ([#12314](https://github.com/vm0-ai/vm0/issues/12314)) ([985ca34](https://github.com/vm0-ai/vm0/commit/985ca3456f237d8788e6a4fb9f404453ef6e3c82))
* migrate zero org logo GET to api backend ([#12929](https://github.com/vm0-ai/vm0/issues/12929)) ([91c2e28](https://github.com/vm0-ai/vm0/commit/91c2e28a5066a02a42419d9b1c3e06917a7cc51a))
* migrate zero usage GET routes to api ([#12936](https://github.com/vm0-ai/vm0/issues/12936)) ([6aa5612](https://github.com/vm0-ai/vm0/commit/6aa5612b961bc53fc5d1709c4215d8f4b47b8638))
* remove fully-enabled OfficialTelegramBot and ChatManualHistory feature switches ([#12349](https://github.com/vm0-ai/vm0/issues/12349)) ([ed51160](https://github.com/vm0-ai/vm0/commit/ed511603a19ec14a0003fccba66250560c290165))
* remove personal model provider switch ([#12361](https://github.com/vm0-ai/vm0/issues/12361)) ([6953d00](https://github.com/vm0-ai/vm0/commit/6953d0046a8c160e394ae079b0d3f5037b9f7c08))
* remove vm0 default agent env fallback ([#13011](https://github.com/vm0-ai/vm0/issues/13011)) ([5c90dfe](https://github.com/vm0-ai/vm0/commit/5c90dfe1f1aa7ce32dbadac90c6de53c0066e12f))
* use member metadata for model-first preference ([#12630](https://github.com/vm0-ai/vm0/issues/12630)) ([452eeb3](https://github.com/vm0-ai/vm0/commit/452eeb3fd693feac5c369ad22d432c7dd49b8c29))


### Performance Improvements

* **chat-threads:** replace ROW_NUMBER with LATERAL last-message lookup ([#12641](https://github.com/vm0-ai/vm0/issues/12641)) ([ba82b88](https://github.com/vm0-ai/vm0/commit/ba82b88bc34f948878ef6f862cae2a1c36aa77df))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @vm0/api-contracts bumped to 1.18.0
    * @vm0/core bumped to 8.273.0
    * @vm0/db bumped to 1.9.1
</details>

<details><summary>web: 12.360.0</summary>

## [12.360.0](https://github.com/vm0-ai/vm0/compare/web-v12.359.0...web-v12.360.0) (2026-05-13)


### Features

* add web chat context prompt ([#13168](https://github.com/vm0-ai/vm0/issues/13168)) ([5122b36](https://github.com/vm0-ai/vm0/commit/5122b36463b009abe1763b722722f1f9526c7624))


### Bug Fixes

* normalize legacy built-in model routes ([#13166](https://github.com/vm0-ai/vm0/issues/13166)) ([e660acf](https://github.com/vm0-ai/vm0/commit/e660acf7fcde89d06e63674cf42341074d4d507a))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @vm0/api-contracts bumped to 1.18.0
    * @vm0/core bumped to 8.273.0
    * @vm0/db bumped to 1.9.1
</details>

<details><summary>guest-agent: 0.31.0</summary>

## [0.31.0](https://github.com/vm0-ai/vm0/compare/guest-agent-v0.30.4...guest-agent-v0.31.0) (2026-05-13)


### Features

* enable Codex memory mounting ([#12651](https://github.com/vm0-ai/vm0/issues/12651)) ([3646b72](https://github.com/vm0-ai/vm0/commit/3646b72ccafa675ff53895f797a99a1e754fd82e))
* **guest-agent:** record last event to cli exit metric ([#12272](https://github.com/vm0-ai/vm0/issues/12272)) ([dce7e82](https://github.com/vm0-ai/vm0/commit/dce7e82908b8bf8f5aff511a7995c0f8e20e66a5))


### Bug Fixes

* **guest-agent:** bound cli stderr diagnostics ([#12937](https://github.com/vm0-ai/vm0/issues/12937)) ([f640407](https://github.com/vm0-ai/vm0/commit/f64040738b75cc29b141bfa18960200fb30727f3))
* **guest-agent:** gate claude code event handling ([#12327](https://github.com/vm0-ai/vm0/issues/12327)) ([94a7634](https://github.com/vm0-ai/vm0/commit/94a7634254d9445f04bb3456d5c28e67bd15e189))
* log Codex JSONL failure diagnostics ([#13118](https://github.com/vm0-ai/vm0/issues/13118)) ([94686f0](https://github.com/vm0-ai/vm0/commit/94686f000b644c7c178dc1eb62976318cdfe006d))
* log masked cli stderr on failure ([#12786](https://github.com/vm0-ai/vm0/issues/12786)) ([0b7c456](https://github.com/vm0-ai/vm0/commit/0b7c456c731f194e7cb9165db91d4afcf7a7249a))


### Refactoring

* split guest artifact snapshot modules ([#13014](https://github.com/vm0-ai/vm0/issues/13014)) ([69d4ebc](https://github.com/vm0-ai/vm0/commit/69d4ebc10f4d72f485401640a66063e2243c115d))
</details>

<details><summary>guest-init: 0.16.31</summary>

## [0.16.31](https://github.com/vm0-ai/vm0/compare/guest-init-v0.16.30...guest-init-v0.16.31) (2026-05-13)
</details>

<details><summary>runner-rs: 0.100.34</summary>

## [0.100.34](https://github.com/vm0-ai/vm0/compare/runner-rs-v0.100.33...runner-rs-v0.100.34) (2026-05-13)


### Bug Fixes

* normalize instructions filename by runtime framework ([#12245](https://github.com/vm0-ai/vm0/issues/12245)) ([55b4846](https://github.com/vm0-ai/vm0/commit/55b484668ed1b559e2bf16f74ad3fcc4b4559c1f))
* **runner:** validate setup artifacts before reporting installed ([#13075](https://github.com/vm0-ai/vm0/issues/13075)) ([cd68236](https://github.com/vm0-ai/vm0/commit/cd68236acea7bf7002be282cabe68b96c533fe10))


### Documentation

* clarify status run replacement semantics ([#12287](https://github.com/vm0-ai/vm0/issues/12287)) ([09c4eb2](https://github.com/vm0-ai/vm0/commit/09c4eb255c566fcd03f14c79c3328eeeae95a2a4))
* document runner path layout ([#12289](https://github.com/vm0-ai/vm0/issues/12289)) ([e37c3b9](https://github.com/vm0-ai/vm0/commit/e37c3b908114949c320ab72c379c80ee15909624))
* **runner:** document network log drain producers ([#13058](https://github.com/vm0-ai/vm0/issues/13058)) ([9325b1a](https://github.com/vm0-ai/vm0/commit/9325b1ac1988c78fc4018e39d3620873dab48adb))


### Refactoring

* route sandbox exec through command operations ([#13018](https://github.com/vm0-ai/vm0/issues/13018)) ([0e5f862](https://github.com/vm0-ai/vm0/commit/0e5f862ee8e2182e23a88df6187f194171004b1f))
* **runner:** include bounded exec diagnostics ([#12368](https://github.com/vm0-ai/vm0/issues/12368)) ([41d5d12](https://github.com/vm0-ai/vm0/commit/41d5d12ced60e34731d78bea2ef172eed5fbdc77))
* **runner:** migrate internal execs to bounded exec ([#12322](https://github.com/vm0-ai/vm0/issues/12322)) ([f0b84b4](https://github.com/vm0-ai/vm0/commit/f0b84b4f09bad9abc16074af3f0190944bba3d04))
* **runner:** stream exec over bounded exec ([#12518](https://github.com/vm0-ai/vm0/issues/12518)) ([ee551da](https://github.com/vm0-ai/vm0/commit/ee551dabe2c464564a576580a9d8811453ffd08d))
* split start test support modules ([#13078](https://github.com/vm0-ai/vm0/issues/13078)) ([53c010a](https://github.com/vm0-ai/vm0/commit/53c010aa730b8ad4d5c3f285b18e81c30f317b6f))


### Performance Improvements

* avoid downloading warmed runner templates ([#12731](https://github.com/vm0-ai/vm0/issues/12731)) ([eb5df7a](https://github.com/vm0-ai/vm0/commit/eb5df7aa28493373ce5ec734924e80d34fd372b4))
* preserve axiom batch capacity ([#13094](https://github.com/vm0-ai/vm0/issues/13094)) ([72bb92e](https://github.com/vm0-ai/vm0/commit/72bb92ebb56c365907c536fb289e1c3873a1b680))
* **runner:** stream guest log copies ([#12418](https://github.com/vm0-ai/vm0/issues/12418)) ([a842925](https://github.com/vm0-ai/vm0/commit/a8429251f3554335ace57e1a78c105cf881c193b))
</details>

<details><summary>sandbox-fc: 0.30.0</summary>

## [0.30.0](https://github.com/vm0-ai/vm0/compare/sandbox-fc-v0.29.8...sandbox-fc-v0.30.0) (2026-05-13)


### Features

* add bounded exec output policies ([#12292](https://github.com/vm0-ai/vm0/issues/12292)) ([71f6ad9](https://github.com/vm0-ai/vm0/commit/71f6ad9aaadaa9bf6589a5915c51ab4c092547eb))


### Bug Fixes

* avoid blocking concurrent COW slot acquisition ([#13036](https://github.com/vm0-ai/vm0/issues/13036)) ([79143ac](https://github.com/vm0-ai/vm0/commit/79143ac7edd164b026a2c894b3681ccb89f8ec50))


### Documentation

* document bounded exec preference ([#12599](https://github.com/vm0-ai/vm0/issues/12599)) ([70aa4eb](https://github.com/vm0-ai/vm0/commit/70aa4eb5444809dc49132cc003278eb2bd504a39))
* **sandbox-fc:** document path helpers ([#13110](https://github.com/vm0-ai/vm0/issues/13110)) ([b94343f](https://github.com/vm0-ai/vm0/commit/b94343f19ae249c459b2dd52087f46472fbacb70))


### Refactoring

* derive cow pool pipeline slot accounting ([#13057](https://github.com/vm0-ai/vm0/issues/13057)) ([467d3b8](https://github.com/vm0-ai/vm0/commit/467d3b88a768857f7158703e214834930ff56fbc))
* route sandbox exec through command operations ([#13018](https://github.com/vm0-ai/vm0/issues/13018)) ([0e5f862](https://github.com/vm0-ai/vm0/commit/0e5f862ee8e2182e23a88df6187f194171004b1f))
* **runner:** migrate internal execs to bounded exec ([#12322](https://github.com/vm0-ai/vm0/issues/12322)) ([f0b84b4](https://github.com/vm0-ai/vm0/commit/f0b84b4f09bad9abc16074af3f0190944bba3d04))
* **runner:** stream exec over bounded exec ([#12518](https://github.com/vm0-ai/vm0/issues/12518)) ([ee551da](https://github.com/vm0-ai/vm0/commit/ee551dabe2c464564a576580a9d8811453ffd08d))
* **sandbox-fc:** keep netns pool internals private ([#13119](https://github.com/vm0-ai/vm0/issues/13119)) ([15b09ec](https://github.com/vm0-ai/vm0/commit/15b09ec0bb44695613dc2de0013da6b0851c09e8))
* split Firecracker factory modules ([#13037](https://github.com/vm0-ai/vm0/issues/13037)) ([bc13e7c](https://github.com/vm0-ai/vm0/commit/bc13e7c5833ecc5ecf23216f5c8f808a5d97d752))
</details>

<details><summary>vsock-guest: 0.15.0</summary>

## [0.15.0](https://github.com/vm0-ai/vm0/compare/vsock-guest-v0.14.2...vsock-guest-v0.15.0) (2026-05-13)


### Features

* add bounded exec output policies ([#12292](https://github.com/vm0-ai/vm0/issues/12292)) ([71f6ad9](https://github.com/vm0-ai/vm0/commit/71f6ad9aaadaa9bf6589a5915c51ab4c092547eb))
* **vsock-guest:** add command operation worker ([#12738](https://github.com/vm0-ai/vm0/issues/12738)) ([80accba](https://github.com/vm0-ai/vm0/commit/80accba2f1767f1cce0964ce76608155d7375158))
* **vsock-host:** add command operation router ([#12782](https://github.com/vm0-ai/vm0/issues/12782)) ([e1ad973](https://github.com/vm0-ai/vm0/commit/e1ad97343e41c441d3539de961f44c91bbad9309))


### Documentation

* document bounded exec preference ([#12599](https://github.com/vm0-ai/vm0/issues/12599)) ([70aa4eb](https://github.com/vm0-ai/vm0/commit/70aa4eb5444809dc49132cc003278eb2bd504a39))


### Refactoring

* compact vsock message types ([#13079](https://github.com/vm0-ai/vm0/issues/13079)) ([09ef60c](https://github.com/vm0-ai/vm0/commit/09ef60c6348d31adf94ab8e04a959a38f5b83ec9))
* remove legacy vsock exec protocol ([#13064](https://github.com/vm0-ai/vm0/issues/13064)) ([318c177](https://github.com/vm0-ai/vm0/commit/318c177b451a8f2f700fca02f6ee41f98beb751f))
* remove redundant monitor spawner wrappers ([#12291](https://github.com/vm0-ai/vm0/issues/12291)) ([961f9c7](https://github.com/vm0-ai/vm0/commit/961f9c72eb0503bd847cfe21bfeb8c6735310fef))
* **runner:** stream exec over bounded exec ([#12518](https://github.com/vm0-ai/vm0/issues/12518)) ([ee551da](https://github.com/vm0-ai/vm0/commit/ee551dabe2c464564a576580a9d8811453ffd08d))
* **vsock-guest:** consolidate sandbox user lookup ([#13136](https://github.com/vm0-ai/vm0/issues/13136)) ([79359f9](https://github.com/vm0-ai/vm0/commit/79359f94601fb71d73276712326c345083ca2ad9))
</details>

<details><summary>vsock-host: 0.14.0</summary>

## [0.14.0](https://github.com/vm0-ai/vm0/compare/vsock-host-v0.13.3...vsock-host-v0.14.0) (2026-05-13)


### Features

* add bounded exec output policies ([#12292](https://github.com/vm0-ai/vm0/issues/12292)) ([71f6ad9](https://github.com/vm0-ai/vm0/commit/71f6ad9aaadaa9bf6589a5915c51ab4c092547eb))
* add host-initiated vsock control handshake ([#12543](https://github.com/vm0-ai/vm0/issues/12543)) ([de17089](https://github.com/vm0-ai/vm0/commit/de17089191b001b3ed6f33487b62a3360bf81174))
* **vsock-host:** add command operation router ([#12782](https://github.com/vm0-ai/vm0/issues/12782)) ([e1ad973](https://github.com/vm0-ai/vm0/commit/e1ad97343e41c441d3539de961f44c91bbad9309))


### Bug Fixes

* **vsock-host:** poison interrupted frame writes ([#12247](https://github.com/vm0-ai/vm0/issues/12247)) ([1860100](https://github.com/vm0-ai/vm0/commit/1860100ba26eecb7db2cd10fa2d63974e2016a76))


### Documentation

* document bounded exec preference ([#12599](https://github.com/vm0-ai/vm0/issues/12599)) ([70aa4eb](https://github.com/vm0-ai/vm0/commit/70aa4eb5444809dc49132cc003278eb2bd504a39))


### Refactoring

* extract vsock host command core ([#13106](https://github.com/vm0-ai/vm0/issues/13106)) ([5890b1a](https://github.com/vm0-ai/vm0/commit/5890b1a45ce9e972ea5841b2d6a77c5c8666533d))
* route sandbox exec through command operations ([#13018](https://github.com/vm0-ai/vm0/issues/13018)) ([0e5f862](https://github.com/vm0-ai/vm0/commit/0e5f862ee8e2182e23a88df6187f194171004b1f))
* **runner:** migrate internal execs to bounded exec ([#12322](https://github.com/vm0-ai/vm0/issues/12322)) ([f0b84b4](https://github.com/vm0-ai/vm0/commit/f0b84b4f09bad9abc16074af3f0190944bba3d04))
* **runner:** stream exec over bounded exec ([#12518](https://github.com/vm0-ai/vm0/issues/12518)) ([ee551da](https://github.com/vm0-ai/vm0/commit/ee551dabe2c464564a576580a9d8811453ffd08d))
* split vsock host file helpers ([#13122](https://github.com/vm0-ai/vm0/issues/13122)) ([587863c](https://github.com/vm0-ai/vm0/commit/587863cbc41e623b074fb7b1952c649c526cb0fa))
* split vsock host process helpers ([#13146](https://github.com/vm0-ai/vm0/issues/13146)) ([bc1ef7c](https://github.com/vm0-ai/vm0/commit/bc1ef7cb2e3c7740b4cc05c9509066c802ee3456))


### Performance Improvements

* **vsock-host:** cap bounded exec stream forwarding ([#12267](https://github.com/vm0-ai/vm0/issues/12267)) ([9a8063a](https://github.com/vm0-ai/vm0/commit/9a8063af272ea95005ce8f2d5c37eba2d64105e5))
</details>

<details><summary>vsock-proto: 0.15.2</summary>

## [0.15.2](https://github.com/vm0-ai/vm0/compare/vsock-proto-v0.15.1...vsock-proto-v0.15.2) (2026-05-13)


### Refactoring

* split vsock-proto frame infrastructure ([#13169](https://github.com/vm0-ai/vm0/issues/13169)) ([df3e8e3](https://github.com/vm0-ai/vm0/commit/df3e8e3a439250225073c18ba5dedebc902d1369))
</details>

<details><summary>vsock-test: 0.9.31</summary>

## [0.9.31](https://github.com/vm0-ai/vm0/compare/vsock-test-v0.9.30...vsock-test-v0.9.31) (2026-05-13)


### Refactoring

* remove legacy vsock exec protocol ([#13064](https://github.com/vm0-ai/vm0/issues/13064)) ([318c177](https://github.com/vm0-ai/vm0/commit/318c177b451a8f2f700fca02f6ee41f98beb751f))
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).