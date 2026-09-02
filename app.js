const bookings = {
  'qvm': { title: '女王市场官网', label: '运营信息', note: '营业日与摊位', url: 'https://qvm.com.au/' },
  'gardens-ngv': { title: 'NGV 官方预约', label: '场馆预约', note: '入场 / 特展复核', url: 'https://www.ngv.vic.gov.au/visit/' },
  'healesville': { title: 'Healesville Sanctuary', label: '官方购票', note: '门票与开放时间', url: 'https://www.zoo.org.au/healesville/tickets/' },
  'balloon': { title: 'Yarra Valley 热气球', label: '运营商预约', note: '天气与取消条款', url: 'https://www.hotairballooning.com.au/yarravalley/' },
  'tidal-river': { title: 'Tidal River 营地', label: 'Parks Victoria 预订', note: '住宿 / 车位复核', url: 'https://bookings.parks.vic.gov.au/book/wilsons-prom-accommodation' },
  'penguin': { title: 'Penguin Parade', label: '官方购票', note: '票档与到场时间', url: 'https://www.penguins.org.au/buy-tickets/' },
  'hot-springs': { title: 'Peninsula Hot Springs', label: '官方预约', note: '浴场时段', url: 'https://www.peninsulahotsprings.com/book/' },
  'ferry': { title: 'Searoad Ferries', label: '官方订位', note: '带车值船 45 分钟前', url: 'https://www.searoad.com.au/book-now/' },
  'maits': { title: 'Cape Otway Lightstation', label: '官网 / 购票', note: '仅天气好且道路开放时', url: 'https://www.lightstation.com/' },
  'learn-to-fly': { title: 'Learn To Fly Melbourne', label: '官方咨询 / 预约', note: '体验飞行与天气条款', url: 'https://learntofly.edu.au/contact/' }
};

const days = [
  { date: '2026-09-24', label: 'D1', dateText: '09.24 · 周四', title: '抵达墨尔本', route: '不租车 · 市中心轻量步行 · 住 Melbourne CBD', places: [
    place('city-arrival', '墨尔本城市地标散步', 'Melbourne City Walk', '把第一天留给调时差：联邦广场、雅拉河和弗林德斯街车站可随体力任意串联。无需追求打卡数量，找到节奏即可。', '联邦广场 → 雅拉河河岸 → 弗林德斯街车站；若到得晚，仅选一段河岸步行。', 'Melbourne CBD；各点都在免费电车区或步行范围。', '咖啡与轻食优先；到达日不预设餐厅，按落地时间决定。', '城市地标、河岸与百年车站', '抵达日不租车；天气或疲劳时把行程压缩为一小段散步。', 'Flinders_Street_railway_station', 'https://www.visitmelbourne.com/'),
    place('st-patricks', '圣派翠克大教堂（备选）', "St Patrick's Cathedral", '位于市中心东缘的哥特式主教堂，是抵达较早且精力尚可时的顺路备选。若 D1 看过，D2 可直接略过。', '入内前查看当日开放与礼拜安排；保持安静、注意着装。', '1 Cathedral Place, East Melbourne。', '逛完可到东区或 CBD 用餐。', '哥特式尖塔与彩窗', '开放时段可能因礼拜活动调整（预计）。', "St_Patrick's_Cathedral,_Melbourne", 'https://melbournecathedral.org.au/')
  ]},
  { date: '2026-09-25', label: 'D2', dateText: '09.25 · 周五', title: '墨尔本市区启动', route: '免费电车区 · 市场、巷弄、园林 · 傍晚 Fitzroy', places: [
    place('qvm', '维多利亚女王市场', 'Queen Victoria Market', '历史市场是市区启动的生活化一站：农产、熟食与摊位构成墨尔本的日常切面。', '先确认当日开市时间；早餐或补给适合放在这里完成。', 'Queen St & Victoria St, Melbourne。', '市场内的熟食、烘焙与咖啡；按当天营业摊位选择。', '历史露天市场与本地食材', '不同日期营业摊位和夜市安排不同（预计）。', 'Queen_Victoria_Market', 'https://qvm.com.au/'),
    place('hosier', '涂鸦巷', 'Hosier Lane', 'Hosier Lane 是持续变化的街头艺术巷道；把它当作城市纹理的一部分，而不是固定展览。', '从 Flinders Street 一侧进入；注意车辆与狭窄路面，快进快出即可。', 'Hosier Lane, Melbourne CBD。', '周边巷弄咖啡馆；不指定单店，避免被营业调整影响。', '高密度街头艺术', '画面会随时间变化，当前墙绘与照片不同属于正常。', 'Hosier_Lane', 'https://www.visitmelbourne.com/regions/melbourne/see-and-do/art-and-culture/street-art/hosier-lane'),
    place('gardens-ngv', '皇家植物园与艺术馆群', 'Royal Botanic Gardens Victoria', '皇家植物园适合把市区节奏放慢；NGV、ACMI 与圣派翠克大教堂作为同日人文备选，按天气和体力取舍。', '植物园走一小环即可；雨天优先 NGV 或 ACMI。展馆入场与特展规则出发前复核。', 'Birdwood Ave, South Yarra；NGV 与 ACMI 均在市中心周边。', 'Southbank 或 CBD 午餐；展馆咖啡厅为雨天稳妥选项。', '英式园林、艺术与银幕文化', 'NGV 等场馆的预约政策及特展票务须出发前复核（预计）。', 'Royal_Botanic_Gardens_Victoria', 'https://www.rbg.vic.gov.au/'),
    place('fitzroy', 'Fitzroy 傍晚散步', 'Fitzroy, Victoria', 'Fitzroy 是行程中的松弛备选：街头、咖啡馆、独立店铺都不必预设路径。', '傍晚沿 Brunswick Street 或 Gertrude Street 随走随停；保留回 CBD 的电车时间。', 'Melbourne CBD 以北。', '咖啡、酒吧和小店；临场选择更合适。', '文艺街区与独立店铺', '不安排硬性景点，作为当天弹性收尾。', 'Fitzroy,_Victoria', 'https://www.visitmelbourne.com/regions/melbourne/destinations/fitzroy')
  ]},
  { date: '2026-09-26', label: 'D3', dateText: '09.26 · 周六', title: '亚拉谷与鸭嘴兽', route: '上午墨尔本 · 下午取车 · 约 1 小时到 Yarra Valley', places: [
    place('yarravalley', '亚拉谷取车与转场', 'Yarra Valley', '上午仍在墨尔本，下午才取车进入亚拉谷。把第一段左侧通行留给白天、熟悉道路的短程驾驶。', '取车时检查车况、儿童座椅（如需）与保险；出城后不要安排过多酒庄停靠。', 'Melbourne → Yarra Valley，约 1 小时车程（预计，视取车点与路况）。', '亚拉谷午餐或简餐；驾驶者不饮酒。', '葡萄园与山谷公路', '当日重点是安全适应右舵左行，不赶行程。', 'Yarra_Valley', 'https://www.visityarravalley.com.au/'),
    place('healesville', '希尔斯维尔野生动物保护区', 'Healesville Sanctuary', '以澳洲本土动物为主的保护区；把鸭嘴兽、袋獾、考拉、袋鼠留在傍晚的主要参观目标。', '提前查看闭园时间与动物讲解时段；入园先确认鸭嘴兽展示区位置，再反向安排。', 'Badger Creek Rd, Healesville。', '园内简餐或 Healesville 小镇晚餐；以闭园时间倒推。', '澳洲本土动物与保育展示', '周末客流与当日动物展示安排可能变化（预计）。', 'Healesville_Sanctuary', 'https://www.zoo.org.au/healesville/')
  ]},
  { date: '2026-09-27', label: 'D4', dateText: '09.27 · 周日', title: '热气球后奔向威尔逊岬', route: '清晨热气球（可取消） · 中午出发 · 住 Tidal River / Yanakie', places: [
    place('balloon', '亚拉谷热气球（碰运气项）', 'Yarra Valley', '日出前集合，体验约 3—4 小时；它是保留的惊喜项目，而不是压缩后续车程的理由。', '前一晚确认天气与集合信息；若风、雾、雨取消，回酒店收拾后按原计划中午出发。', 'Yarra Valley；具体起降地由运营方按当日天气决定。', '飞行后按运营方安排早餐（若包含）或在小镇补给。', '日出葡萄园与山谷视野', '是否起飞完全由天气决定；取消可改期或退款以运营方条款为准。', 'Yarra_Valley', 'https://www.visitvictoria.com/regions/yarra-valley-and-dandenong-ranges'),
    place('tidal-river', '潮汐河与诺曼海滩', 'Tidal River, Victoria', '中午从亚拉谷出发，途中经 Leongatha、Foster 午餐与加油；傍晚在诺曼海滩、潮汐河河口和营地周边放慢。', 'Tidal River 无油站，务必在 Foster 前后补满；到营地后不再追求远处景点。', 'Wilsons Promontory National Park 南端；住 Tidal River（优先）或 Yanakie。', 'Foster 小镇午餐与补给；营地自备/简餐。', '河口、海滩与黄昏野生动物', '入口工程公告覆盖此日期，可能有临时交通管制；出发前复核。', 'Tidal_River,_Victoria', 'https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park')
  ]},
  { date: '2026-09-28', label: 'D5', dateText: '09.28 · 周一', title: '威尔逊岬全天', route: '工作日看海滩与雨林 · 傍晚 Big Drift · 住原处不换', places: [
    place('squeaky', '吱吱海滩、威士忌湾与野餐湾', 'Squeaky Beach', '白色石英砂在脚下会发出声响，三处海湾可按停车情况取舍；不需要机械地全打卡。', '尽量早于 10:00 抵达热门点；车位满时改从 Tidal River 步行。海况复杂，不把这里当作游泳任务。', 'Wilsons Promontory 西侧，邻近 Tidal River。', '带水与野餐；离开时带走全部垃圾。', '石英白沙、花岗岩与海湾步道', 'Parks Victoria 提醒该海滩无救生员巡逻且常有离岸流。', 'Squeaky_Beach', 'https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park/things-to-do/squeaky-beach'),
    place('lilly', '莉莉皮里谷与野生动物漫步', 'Wilsons Promontory National Park', '在海岸之外走进温带雨林与草地，是把“看海”调成“看生态”的一段。', 'Lilly Pilly Gully 与 Wildlife Walk 可按天气各选短线；沿标识步道，不追逐动物。', 'Tidal River 周边；以当日官方步道开放信息为准。', '营地或自备补给，减少往返驾驶。', '蕨类雨林、袋鼠、袋熊等原生动物', '步道、桥梁和湿滑情况以现场公告为准。', 'Wilsons_Promontory_National_Park', 'https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park/things-to-do/day-walks'),
    place('bigdrift', '大沙丘日落月升', 'Big Drift', '巨型风积沙丘是当天的压轴；重点是日落，而不是等到完全黑暗后的“月升打卡”。', '带头灯/手机照明、防风层和水；以能清楚识别返程路为边界，不独自摸黑下沙坡。', 'Big Drift carpark 起步；返程回 Tidal River。', '提前备好晚餐或零食，避免下山后再找食物。', '风积沙丘与辽阔天际线', '这是本行程最关键夜行段；强风或降雨时直接放弃（预计）。', 'Wilsons_Promontory_National_Park', 'https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park')
  ]},
  { date: '2026-09-29', label: 'D6', dateText: '09.29 · 周二', title: '威尔逊岬到菲利普岛', route: '上午轻徒步 · 下午约 2.5—3 小时车程 · 日落与企鹅归巢', places: [
    place('tonguepoint', 'Mount Bishop / Darby 至 Tongue Point', 'Tongue Point (Victoria)', '上午只做轻量徒步：Mount Bishop 或 Darby 至 Tongue Point 二选一，留足下午转场余量。', '根据前一日体力、天气和步道公告选择；不在临海危险岩面冒险。', 'Wilsons Promontory 北部步道；从相应停车场起步。', '出发前在 Tidal River / Foster 补给，午餐不拖长。', '风蚀海岬、灌木与远眺', '原计划为二选一；不是必须完成两条。', 'Tongue_Point_(Victoria)', 'https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park/things-to-do/day-walks'),
    place('nobbies', '诺比斯中心与海豹岩', 'The Nobbies, Victoria', '傍晚先到诺比斯木栈道看海豹岩、海鸟与南岸落日，再前往企鹅归巢。', '白天先走木栈道；日落前确认道路与停车安排。全程留意黄昏出没的野生动物。', 'Phillip Island 西南端，靠近 Summerland。', '企鹅中心附近餐饮选择有限；建议在 Cowes 或途中解决正餐。', '海豹岩、海鸟与海蚀海岸', '当前运营方公告称 Nobbies 木栈道与停车场开放、中心咖啡厅等可能关闭；以出发前公告为准。', 'The_Nobbies,_Victoria', 'https://www.penguins.org.au/visit/important-information/'),
    place('penguin', '小蓝企鹅归巢', 'Penguin Parade', '小蓝企鹅在日落后从海上回到洞穴，是岛上最需要按预约执行的体验。', '提前订票；按票面时间到达，带防风保暖层。日落后禁止拍照或录像，散场后只回岛上住宿。', '1019 Ventnor Rd, Summerlands, VIC 3922。', '观演前在 Cowes / Newhaven 用晚餐；场内以轻食为主。', '世界最大的小蓝企鹅群落之一', '官方建议一般观景至少提早约 1 小时到场；到达时间以票面为准。', 'Penguin_Parade', 'https://www.penguins.org.au/public/attractions/penguin-parade/')
  ]},
  { date: '2026-09-30', label: 'D7', dateText: '09.30 · 周三', title: '菲利普岛到莫宁顿', route: 'Cape Woolamai / Churchill Island 二选一 · 午后温泉 · 住半岛南端', places: [
    place('woolamai', '伍拉迈角 / 丘吉尔岛', 'Cape Woolamai', '上午在花岗岩海岸徒步与农场岛屿体验间二选一，让离岛时间保持弹性。', '想走海岸选 Cape Woolamai 短线；风雨或希望轻松时改 Churchill Island。', 'Phillip Island 东南端 / Churchill Island。', 'Cowes 早餐、午餐后再离岛；避免赶在车流高峰。', '花岗岩海岸或历史农场', '此处按原计划二选一；不建议同时硬塞。', 'Cape_Woolamai', 'https://www.penguins.org.au/visit/'),
    place('hot-springs', '半岛温泉', 'Peninsula Hot Springs', '从菲利普岛驶往莫宁顿半岛后，用地热浴场把节奏完全降下来。', '提前预约指定时段；带泳衣、拖鞋和保暖衣物，按场馆规则安排入场。', 'Springs Lane, Fingal；住 Sorrento / Rye / Fingal。', '温泉场馆餐饮或 Rye、Sorrento 晚餐；以预约时段为先。', '天然地热温泉与户外泡池', '浴场与护理服务均可能需要预约；票务与开放时间须复核。', 'Peninsula_Hot_Springs', 'https://www.peninsulahotsprings.com/')
  ]},
  { date: '2026-10-01', label: 'D8', dateText: '10.01 · 周四', title: '轮渡进入大洋路', route: 'Point Nepean / Sorrento · 车辆轮渡 · Surf Coast · 住 Lorne', places: [
    place('pointnepean', '尼皮恩角与索伦托', 'Point Nepean National Park', '上午在军事遗址海岬或索伦托小镇间取舍，核心是不要错过带车轮渡的值船时间。', '先锁定轮渡班次，再倒推尼皮恩角停留；过早消耗体力没有必要。', 'Mornington Peninsula 南端；轮渡码头在 Sorrento。', 'Sorrento 镇咖啡与简餐，预留上船时间。', '军事遗址、海峡与海湾风景', '景区开放与车辆轮渡班次以当日运营信息为准。', 'Point_Nepean_National_Park', 'https://www.parks.vic.gov.au/places-to-see/parks/point-nepean-national-park'),
    place('ferry', '索伦托—昆斯克利夫车辆轮渡', 'Searoad Ferries', '跨越 Port Phillip 的约 40 分钟水路，将半岛直接接入贝拉林半岛，是这条环线的关键连接。', '旺季带车优先订位；运营方要求车辆一般在开船前 45 分钟完成值船，按订单为准。', 'Sorrento Pier ↔ Queenscliff Harbour。', '码头周边咖啡；车上仅作短暂休整。', '带车横渡 Port Phillip Bay', '班次、值船及天气影响会变化；以 Searoad 当日确认邮件和官网为准。', 'Searoad_Ferries', 'https://www.searoad.com.au/'),
    place('surfcoast', '巴旺黑兹、贝尔斯海滩与托基', 'Bells Beach, Victoria', '离船后沿 Surf Coast 向西，把海滨小镇与冲浪海岸当作串联停靠；只选 1—2 个充分停留。', '先看天气与海况；海滩观景不等于适合下水。下午仍需留给灯塔、拱门和 Lorne。', 'Queenscliff → Barwon Heads → Bells Beach → Torquay。', 'Torquay 或 Barwon Heads 解决午后简餐。', '冲浪海岸与礁岩浪线', '停靠点多，需主动取舍；不赶每一站。', 'Bells_Beach,_Victoria', 'https://www.visitvictoria.com/regions/great-ocean-road'),
    place('splitpoint', '小红帽灯塔、纪念拱门与洛恩', 'Split Point Lighthouse', '从 Aireys Inlet 的灯塔，到大洋路纪念拱门，再到 Lorne 住宿，是大洋路东段的开场。', '先确认灯塔登塔开放；纪念拱门短停拍照，天黑前到 Lorne。', 'Aireys Inlet → Eastern View → Lorne。', 'Lorne 海滨晚餐；订不到房则按原计划改住 Torquay / Aireys Inlet。', '白色灯塔与大洋路入口标志', '登塔时段和房源需以预订页面为准。', 'Split_Point_Lighthouse', 'https://www.greatoceanroadauthority.vic.gov.au/')
  ]},
  { date: '2026-10-02', label: 'D9', dateText: '10.02 · 周五', title: '洛恩到奥特威雨林', route: '瀑布 · 考拉观察 · 巨型蕨类雨林 · 住 Apollo Bay', places: [
    place('erskine', '厄斯金瀑布', 'Erskine Falls', '从 Lorne 进入雨林的第一段瀑布停留，适合早上体力充足时走下观景台。', '台阶湿滑，穿防滑鞋；暴雨后按封闭信息调整。', 'Erskine Falls Access Rd, Lorne hinterland。', 'Lorne 先补水和简单早餐。', '雨林瀑布与蕨类谷地', '降雨后路况与步道封闭可能变化（预计）。', 'Erskine_Falls', 'https://www.parks.vic.gov.au/places-to-see/parks/great-otway-national-park'),
    place('kennett', '肯尼特河看考拉', 'Kennett River', '在大洋路旁的桉树间观察野生考拉；这不是动物园，看到与否都取决于自然。', '抬头看树冠、保持距离，不投喂、不追逐；路边停车时尤其注意来车。', 'Kennett River, Great Ocean Road。', '沿路咖啡点作为补给，别把此处当作正餐目的地。', '野生考拉与桉树林', '野生动物出现具有随机性（预计）。', 'Kennett_River', 'https://www.visitvictoria.com/regions/great-ocean-road'),
    place('maits', 'Maits Rest 雨林与奥特威海角（可选）', "Maits'_Rest", 'Maits Rest 的短环线浓缩了巨型蕨类雨林；天气好、道路开放时再加 Cape Otway Lightstation。', 'Maits Rest 作为当天必走短线；Cape Otway 为可选，不为灯塔牺牲到 Apollo Bay 的入住节奏。', 'Great Otway National Park；Cape Otway 需绕行。', 'Apollo Bay 晚餐；路上只作轻补给。', '温带雨林与澳洲古老灯塔', 'Cape Otway 开放、收费与道路条件须出发前复核。', "Maits'_Rest", 'https://www.parks.vic.gov.au/places-to-see/parks/great-otway-national-park')
  ]},
  { date: '2026-10-03', label: 'D10', dateText: '10.03 · 周六', title: '十二门徒与坎贝尔港', route: '早出发避正午 · Gibson Steps · Twelve Apostles · Loch Ard Gorge', places: [
    place('gibson', '吉布森台阶', 'Gibson Steps', '吉布森台阶让人从近海平面感受石灰岩海岸；海况合适才下到沙滩。', '先看潮汐、风浪与现场封闭标识；不翻越护栏，不在浪线附近逗留。', 'Great Ocean Road，距十二门徒观景区不远。', 'Apollo Bay 出发前吃饱，沿线餐饮作为补给而非主计划。', '近距离海蚀崖与海滩', '能否下行完全取决于海况与现场安全公告。', 'Gibson_Steps', 'https://www.parks.vic.gov.au/places-to-see/parks/port-campbell-national-park'),
    place('apostles', '十二门徒', 'Twelve Apostles (Victoria)', '大洋路标志性的石灰岩海柱群。周六会更拥挤，早到的价值在于光线、停车和不被正午人流打断。', '从官方观景步道观看；强风时双手控门、远离悬崖边，不为照片后退。', 'Port Campbell National Park, Victoria。', '午餐放在 Port Campbell；不在停车区赶时间。', '南大洋海蚀石灰岩柱', '免费开放但停车位与人流会波动；早到避开正午。', 'Twelve_Apostles_(Victoria)', 'https://www.parks.vic.gov.au/places-to-see/parks/port-campbell-national-park'),
    place('lochard', '洛阿德峡谷', 'Loch Ard Gorge', '以 1878 年沉船命名的峡谷海湾，是十二门徒后更适合细走的观景步道。', '按指示在观景区行走；不下未开放通道，注意强风与浪涌。', 'Port Campbell National Park，近坎贝尔港。', 'Port Campbell 小镇晚餐与住宿。', '峡谷、海湾与沉船故事', '步道开放、海况和日落时间以当天现场为准。', 'Loch_Ard_Gorge', 'https://www.parks.vic.gov.au/places-to-see/parks/port-campbell-national-park')
  ]},
  { date: '2026-10-04', label: 'D11', dateText: '10.04 · 周日', title: '西段海岸回墨尔本', route: 'London Bridge · The Grotto · Bay of Martyrs / Islands · 内陆返城', places: [
    place('londonbridge', '伦敦桥与石窟', 'London Bridge (Victoria)', '上午从坎贝尔港向西看海拱与石窟；海岸景点密度很高，留下缓冲给内陆长途返城。', '每处短停观景；留意围栏、强风和停车场时间，别在上午耗尽。', 'Port Campbell 西侧 Great Ocean Road 沿线。', 'Port Campbell 出发前补给；内陆途中只做必要休息。', '坍塌海拱与天然岩洞', '海浪、天气与观景步道状况以现场公告为准。', 'London_Bridge_(Victoria)', 'https://www.parks.vic.gov.au/places-to-see/parks/bay-of-islands-coastal-park'),
    place('bayislands', '殉难者湾与群岛湾', 'Bay of Islands Coastal Park', '将行程最后的海岸风景留给 Bay of Martyrs 与 Bay of Islands，再从内陆回到墨尔本。', '不要贪多：选择 1—2 个观景点后就启程；当天约 4—5 小时内陆车程须留余量。', 'Peterborough 以西海岸，后转内陆往 Melbourne。', '沿途服务区补给；抵达 Melbourne 再安排正餐。', '开阔海岸岩柱与长线海景', '当日凌晨夏令时开始，时钟拨快 1 小时；车载设备可能不会自动更新。', 'Bay_of_Islands_Coastal_Park', 'https://www.parks.vic.gov.au/places-to-see/parks/bay-of-islands-coastal-park')
  ]},
  { date: '2026-10-05', label: 'D12', dateText: '10.05 · 周一', title: '开飞机体验与收尾', route: 'Moorabbin 体验飞行 · 市区人文或天气缓冲 · 从容还车', places: [
    place('learn-to-fly', 'Moorabbin 开飞机体验', 'Moorabbin Airport', '这是一段有仪表飞行员陪同的体验活动：报到、安全影片后，由游客在副驾驶位实际操控飞机。', '按运营方预约提前到机场；带照片证件，天气、体重限制和实际飞行时间以订单条款为准。', 'Moorabbin Airport，市区东南约 30 分钟（预计）。', '飞行后回市区午餐；不要把飞行前后安排得过紧。', '在教员陪同下的通航体验', '30/60 分钟等产品、天气取消与资格要求须以预约运营方为准。', 'Moorabbin_Airport', 'https://www.visitvictoria.com/'),
    place('ngv-library', 'NGV / 州立图书馆（天气备选）', 'National Gallery of Victoria', '午后在人文场馆收尾，或把它作为全线因天气删减项目的缓冲。优先级取决于前段有没有遗憾。', '只选一个重点看；确认临展预约与闭馆时间，再从容还车、整理行李。', 'NGV：St Kilda Rd；州立图书馆：328 Swanston St。', 'Southbank 或 CBD 的最后一顿晚餐。', '维州艺术收藏与历史阅览空间', '展览、预约和开馆时间可能调整（预计）。', 'National_Gallery_of_Victoria', 'https://www.ngv.vic.gov.au/')
  ]},
  { date: '2026-10-06', label: 'END', dateText: '10.06 · 周二', title: '返程日', route: '不安排行程 · 提前到机场 · 留给不可控因素', places: [
    place('departure', '返程与最后检查', 'Melbourne Airport', '返程日不安排行程。若航班很早，前一日就应把景点收尾，并优先考虑机场附近住宿。', '确认航站楼、值机时间、租车还车地点与行李；把护照、机票、国际驾照等放在同一随身包。', 'Melbourne Airport / Tullamarine。', '按航班时间在机场或住宿附近解决早餐。', '留白本身就是行程的一部分', '航班、还车与交通时间以实际订单为准。', 'Melbourne_Airport', 'https://www.melbourneairport.com.au/')
  ]}
];

function place(id, name, en, intro, guide, location, food, feature, caution, wiki, source) {
  return { id, name, en, intro, guide, location, food, feature, caution, wiki, source, booking: bookings[id] || null };
}

const nav = document.querySelector('#itinerary-nav');
const placeHeading = document.querySelector('#place-heading');
const placeCard = document.querySelector('#place-card');
const menuButton = document.querySelector('#menu-button');
const sidebar = document.querySelector('.sidebar');
let activeId = '';

function buildNav() {
  nav.innerHTML = days.map(day => `
    <section class="day-nav">
      <button class="day-nav-button" type="button" data-place="${day.places[0].id}">
        <span class="day-number">${day.label}</span><span><strong>${day.title}</strong><small>${day.dateText}</small></span>
      </button>
      ${day.places.map(item => `<button class="spot-nav" type="button" data-place="${item.id}">${item.name}</button>`).join('')}
    </section>`).join('');
  nav.addEventListener('click', event => {
    const button = event.target.closest('[data-place]');
    if (!button) return;
    renderPlace(button.dataset.place, true);
    sidebar.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
}

function findPlace(id) {
  for (const day of days) {
    const item = day.places.find(candidate => candidate.id === id);
    if (item) return { day, item };
  }
  return { day: days[0], item: days[0].places[0] };
}

function renderPlace(id, moveFocus = false) {
  const { day, item } = findPlace(id);
  activeId = item.id;
  document.querySelectorAll('.spot-nav').forEach(button => button.classList.toggle('active', button.dataset.place === item.id));
  placeHeading.innerHTML = `<div><span class="day-kicker">${day.label} · ${day.dateText}</span><h2>${day.title}</h2></div><p class="route-context">${day.route}</p>`;
  placeCard.innerHTML = `
    <div class="place-photo" id="place-photo"><div class="image-placeholder">正在调取实景图…</div></div>
    <div class="place-info">
      <span class="english">${item.en}</span><h3>${item.name}</h3><p class="place-intro">${item.intro}</p>
      <dl class="facts">
        <div class="fact"><dt>基础导览</dt><dd>${item.guide}</dd></div>
        <div class="fact"><dt>地理位置</dt><dd>${item.location}</dd></div>
        <div class="fact"><dt>可以尝试</dt><dd>${item.food}</dd></div>
        <div class="fact"><dt>特色</dt><dd>${item.feature}</dd></div>
        <div class="fact"><dt>提醒</dt><dd>${item.caution}</dd></div>
        ${item.booking ? `<div class="fact"><dt>官方预约</dt><dd><a href="${item.booking.url}" target="_blank" rel="noopener">${item.booking.title} · ${item.booking.note} ↗</a></dd></div>` : ''}
      </dl>
      <div class="place-links">${item.booking ? `<a href="${item.booking.url}" target="_blank" rel="noopener">前往官方预约 ↗</a>` : ''}<a href="${item.source}" target="_blank" rel="noopener">官方 / 资料来源 ↗</a><a href="https://en.wikipedia.org/wiki/${encodeURIComponent(item.wiki)}" target="_blank" rel="noopener">查看图片出处 ↗</a></div>
    </div>`;
  localStorage.setItem('victoria-loop-current-place', item.id);
  loadWikipediaImage(item);
  if (moveFocus) document.querySelector('#place-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function loadWikipediaImage(item) {
  const holder = document.querySelector('#place-photo');
  if (!holder) return;
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.wiki)}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('No image');
    const data = await response.json();
    const image = data.originalimage?.source || data.thumbnail?.source;
    if (!image) throw new Error('No image');
    holder.innerHTML = `<img src="${image}" alt="${escapeHtml(item.name)} 的实景图" referrerpolicy="no-referrer"><span class="photo-note">实景图：<a href="${data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(item.wiki)}`}" target="_blank" rel="noopener">Wikipedia / Wikimedia Commons ↗</a></span>`;
  } catch {
    holder.innerHTML = `<div class="image-placeholder">${escapeHtml(item.name)}</div><span class="photo-note">该词条主图暂不可用；请通过右侧“查看图片出处”核验。</span>`;
  }
}

function escapeHtml(value) { return value.replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char])); }

function initialPlace() {
  const today = new Date().toLocaleDateString('en-CA');
  const currentDay = days.find(day => day.date === today);
  const saved = localStorage.getItem('victoria-loop-current-place');
  return currentDay?.places[0].id || saved || days[0].places[0].id;
}

document.querySelector('#show-alerts').addEventListener('click', () => document.querySelector('#alerts').scrollIntoView({ behavior: 'smooth' }));
document.querySelector('#booking-hub').innerHTML = `<h3>预约与核验</h3><p>以下均为运营方或场馆官方入口；价格、余位、取消规则和最后到场时间以实际订单为准。</p><div class="booking-list">${Object.values(bookings).map((entry, index) => `<a href="${entry.url}" target="_blank" rel="noopener"><span>${String(index + 1).padStart(2, '0')} · ${entry.label}</span><strong>${entry.title}</strong><small>${entry.note} ↗</small></a>`).join('')}</div>`;
menuButton?.addEventListener('click', () => { const open = sidebar.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); });
buildNav();
renderPlace(initialPlace());
