export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","game_modes/cb.png","game_modes/rm.png","game_modes/sz.png","game_modes/tc.png","gears/Clt_AMB000.png","gears/Clt_AMB001.png","gears/Clt_AMB002.png","gears/Clt_AMB003.png","gears/Clt_AMB004.png","gears/Clt_AMB005.png","gears/Clt_AMB006.png","gears/Clt_AMB007.png","gears/Clt_AMB008.png","gears/Clt_AMB009.png","gears/Clt_AMB010.png","gears/Clt_AMB011.png","gears/Clt_AMB012.png","gears/Clt_AMB013.png","gears/Clt_AMB014.png","gears/Clt_AMB015.png","gears/Clt_AMB017.png","gears/Clt_COP001.png","gears/Clt_COP002.png","gears/Clt_COP003.png","gears/Clt_COP004.png","gears/Clt_COP005.png","gears/Clt_COP006.png","gears/Clt_COP007.png","gears/Clt_COP008.png","gears/Clt_COP009.png","gears/Clt_COP010.png","gears/Clt_COP011.png","gears/Clt_COP100.png","gears/Clt_COP101.png","gears/Clt_COP102.png","gears/Clt_COP111.png","gears/Clt_COP112.png","gears/Clt_FST001.png","gears/Clt_HAP001.png","gears/Clt_JKT000.png","gears/Clt_JKT001.png","gears/Clt_JKT002.png","gears/Clt_JKT003.png","gears/Clt_JKT004.png","gears/Clt_JKT005.png","gears/Clt_JKT006.png","gears/Clt_JKT007.png","gears/Clt_JKT008.png","gears/Clt_JKT009.png","gears/Clt_JKT010.png","gears/Clt_JKT011.png","gears/Clt_JKT012.png","gears/Clt_JKT013.png","gears/Clt_JKT014.png","gears/Clt_JKT015.png","gears/Clt_JKT016.png","gears/Clt_JKT019.png","gears/Clt_JKT023.png","gears/Clt_JKT036.png","gears/Clt_JKT045.png","gears/Clt_JKT046.png","gears/Clt_JKT047.png","gears/Clt_JKT048.png","gears/Clt_JKT049.png","gears/Clt_JKT050.png","gears/Clt_JKT051.png","gears/Clt_JKT054.png","gears/Clt_JKT055.png","gears/Clt_JKT056.png","gears/Clt_JKT057.png","gears/Clt_JKT060.png","gears/Clt_MSN000.png","gears/Clt_MSN004.png","gears/Clt_MSN110.png","gears/Clt_MSN301.png","gears/Clt_MSN302.png","gears/Clt_MSN303.png","gears/Clt_MSN304.png","gears/Clt_MSN305.png","gears/Clt_MSN306.png","gears/Clt_MSN310.png","gears/Clt_PLO000.png","gears/Clt_PLO001.png","gears/Clt_PLO002.png","gears/Clt_PLO003.png","gears/Clt_PLO004.png","gears/Clt_PLO005.png","gears/Clt_PLO006.png","gears/Clt_PLO007.png","gears/Clt_PLO008.png","gears/Clt_PLO009.png","gears/Clt_PLO010.png","gears/Clt_PRK000.png","gears/Clt_PRK001.png","gears/Clt_PRK002.png","gears/Clt_PRK006.png","gears/Clt_PRK012.png","gears/Clt_PRK013.png","gears/Clt_PRK014.png","gears/Clt_PRK015.png","gears/Clt_SHT000.png","gears/Clt_SHT001.png","gears/Clt_SHT002.png","gears/Clt_SHT003.png","gears/Clt_SHT004.png","gears/Clt_SHT005.png","gears/Clt_SHT006.png","gears/Clt_SHT007.png","gears/Clt_SHT008.png","gears/Clt_SHT009.png","gears/Clt_SHT010.png","gears/Clt_SHT011.png","gears/Clt_SHT012.png","gears/Clt_SHT013.png","gears/Clt_SHT014.png","gears/Clt_SHT015.png","gears/Clt_SHT017.png","gears/Clt_SHT018.png","gears/Clt_SHT019.png","gears/Clt_SHT020.png","gears/Clt_SHT024.png","gears/Clt_SHT025.png","gears/Clt_SHT026.png","gears/Clt_SHT030.png","gears/Clt_SHT031.png","gears/Clt_SHT032.png","gears/Clt_SHT033.png","gears/Clt_SHT034.png","gears/Clt_SHT036.png","gears/Clt_SHT038.png","gears/Clt_SHT039.png","gears/Clt_SHT040.png","gears/Clt_SWT000.png","gears/Clt_SWT001.png","gears/Clt_SWT002.png","gears/Clt_SWT003.png","gears/Clt_SWT004.png","gears/Clt_SWT005.png","gears/Clt_SWT006.png","gears/Clt_SWT007.png","gears/Clt_SWT010.png","gears/Clt_SWT013.png","gears/Clt_SWT016.png","gears/Clt_SWT017.png","gears/Clt_SWT018.png","gears/Clt_SWT020.png","gears/Clt_SWT021.png","gears/Clt_SWT022.png","gears/Clt_TEL000.png","gears/Clt_TEL001.png","gears/Clt_TEL002.png","gears/Clt_TEL003.png","gears/Clt_TEL004.png","gears/Clt_TEL005.png","gears/Clt_TEL006.png","gears/Clt_TEL007.png","gears/Clt_TEL008.png","gears/Clt_TEL009.png","gears/Clt_TEL010.png","gears/Clt_TEL011.png","gears/Clt_TEL012.png","gears/Clt_TEL015.png","gears/Clt_TEL026.png","gears/Clt_TES000.png","gears/Clt_TES001.png","gears/Clt_TES003.png","gears/Clt_TES004.png","gears/Clt_TES005.png","gears/Clt_TES006.png","gears/Clt_TES007.png","gears/Clt_TES008.png","gears/Clt_TES009.png","gears/Clt_TES010.png","gears/Clt_TES011.png","gears/Clt_TES012.png","gears/Clt_TES013.png","gears/Clt_TES014.png","gears/Clt_TES015.png","gears/Clt_TES016.png","gears/Clt_TES017.png","gears/Clt_TES018.png","gears/Clt_TES019.png","gears/Clt_TES020.png","gears/Clt_TES021.png","gears/Clt_TES022.png","gears/Clt_TES023.png","gears/Clt_TES026.png","gears/Clt_TES027.png","gears/Clt_TES028.png","gears/Clt_TES029.png","gears/Clt_TES030.png","gears/Clt_TES035.png","gears/Clt_TES047.png","gears/Clt_TES048.png","gears/Clt_TES049.png","gears/Clt_TES050.png","gears/Clt_TES055.png","gears/Clt_TES063.png","gears/Clt_TES064.png","gears/Clt_TES066.png","gears/Clt_TES067.png","gears/Clt_TES069.png","gears/Clt_TES070.png","gears/Clt_TES071.png","gears/Clt_TES072.png","gears/Clt_TES073.png","gears/Clt_TES074.png","gears/Clt_TES075.png","gears/Clt_TES076.png","gears/Clt_TES077.png","gears/Clt_TES082.png","gears/Clt_TES083.png","gears/Clt_TES084.png","gears/Clt_TES085.png","gears/Clt_TES088.png","gears/Clt_TES090.png","gears/Clt_TES091.png","gears/Clt_TES092.png","gears/Clt_TES093.png","gears/Clt_TLY000.png","gears/Clt_TLY001.png","gears/Clt_TLY002.png","gears/Clt_TLY003.png","gears/Clt_TLY004.png","gears/Clt_TLY005.png","gears/Clt_TLY006.png","gears/Clt_TLY007.png","gears/Clt_TLY008.png","gears/Clt_TLY009.png","gears/Clt_TNK000.png","gears/Clt_TNK001.png","gears/Clt_TNK003.png","gears/Clt_TNK008.png","gears/Clt_TRG000.png","gears/Clt_VST000.png","gears/Clt_VST001.png","gears/Clt_VST002.png","gears/Clt_VST003.png","gears/Clt_VST004.png","gears/Clt_VST005.png","gears/Clt_VST010.png","gears/Clt_VST011.png","gears/Clt_VST012.png","gears/Clt_VST013.png","gears/Dummy.png","gears/Hed_ACC003.png","gears/Hed_AMB000.png","gears/Hed_AMB001.png","gears/Hed_AMB002.png","gears/Hed_AMB003.png","gears/Hed_AMB004.png","gears/Hed_AMB005.png","gears/Hed_AMB006.png","gears/Hed_AMB007.png","gears/Hed_AMB008.png","gears/Hed_AMB009.png","gears/Hed_AMB010.png","gears/Hed_AMB011.png","gears/Hed_AMB012.png","gears/Hed_AMB013.png","gears/Hed_AMB016.png","gears/Hed_AMB017.png","gears/Hed_CAP000.png","gears/Hed_CAP001.png","gears/Hed_CAP002.png","gears/Hed_CAP003.png","gears/Hed_CAP004.png","gears/Hed_CAP005.png","gears/Hed_CAP006.png","gears/Hed_CAP007.png","gears/Hed_CAP008.png","gears/Hed_CAP009.png","gears/Hed_CAP010.png","gears/Hed_CAP011.png","gears/Hed_CAP012.png","gears/Hed_CAP014.png","gears/Hed_CAP020.png","gears/Hed_CAP021.png","gears/Hed_CAP023.png","gears/Hed_CAP024.png","gears/Hed_CAP028.png","gears/Hed_CAP034.png","gears/Hed_CAP035.png","gears/Hed_CAP036.png","gears/Hed_COP001.png","gears/Hed_COP002.png","gears/Hed_COP003.png","gears/Hed_COP004.png","gears/Hed_COP005.png","gears/Hed_COP006.png","gears/Hed_COP007.png","gears/Hed_COP008.png","gears/Hed_COP009.png","gears/Hed_COP010.png","gears/Hed_COP011.png","gears/Hed_COP100.png","gears/Hed_COP101.png","gears/Hed_COP110.png","gears/Hed_COP111.png","gears/Hed_COP112.png","gears/Hed_COP113.png","gears/Hed_COP114.png","gears/Hed_COP115.png","gears/Hed_COP116.png","gears/Hed_COP117.png","gears/Hed_EYE000.png","gears/Hed_EYE001.png","gears/Hed_EYE002.png","gears/Hed_EYE003.png","gears/Hed_EYE004.png","gears/Hed_EYE005.png","gears/Hed_EYE006.png","gears/Hed_EYE007.png","gears/Hed_EYE008.png","gears/Hed_EYE009.png","gears/Hed_EYE010.png","gears/Hed_EYE011.png","gears/Hed_EYE012.png","gears/Hed_EYE014.png","gears/Hed_EYE015.png","gears/Hed_EYE016.png","gears/Hed_EYE018.png","gears/Hed_EYE021.png","gears/Hed_EYE022.png","gears/Hed_EYE023.png","gears/Hed_EYE024.png","gears/Hed_EYE025.png","gears/Hed_EYE026.png","gears/Hed_EYE027.png","gears/Hed_EYE029.png","gears/Hed_EYE030.png","gears/Hed_EYE031.png","gears/Hed_FST000.png","gears/Hed_HAT000.png","gears/Hed_HAT001.png","gears/Hed_HAT002.png","gears/Hed_HAT003.png","gears/Hed_HAT004.png","gears/Hed_HAT005.png","gears/Hed_HAT006.png","gears/Hed_HAT007.png","gears/Hed_HAT008.png","gears/Hed_HAT010.png","gears/Hed_HAT015.png","gears/Hed_HAT016.png","gears/Hed_HAT017.png","gears/Hed_HAT019.png","gears/Hed_HAT020.png","gears/Hed_HAT021.png","gears/Hed_HBD001.png","gears/Hed_HBD002.png","gears/Hed_HBD003.png","gears/Hed_HBD004.png","gears/Hed_HBD005.png","gears/Hed_HBD007.png","gears/Hed_HBD009.png","gears/Hed_HDP000.png","gears/Hed_HDP001.png","gears/Hed_HDP004.png","gears/Hed_HDP007.png","gears/Hed_HDP008.png","gears/Hed_HDP009.png","gears/Hed_HDP011.png","gears/Hed_HDP012.png","gears/Hed_INV000.png","gears/Hed_MET000.png","gears/Hed_MET002.png","gears/Hed_MET004.png","gears/Hed_MET005.png","gears/Hed_MET006.png","gears/Hed_MET007.png","gears/Hed_MET009.png","gears/Hed_MET012.png","gears/Hed_MET013.png","gears/Hed_MET014.png","gears/Hed_MET016.png","gears/Hed_MET019.png","gears/Hed_MSK000.png","gears/Hed_MSK001.png","gears/Hed_MSK002.png","gears/Hed_MSK003.png","gears/Hed_MSK004.png","gears/Hed_MSK005.png","gears/Hed_MSK006.png","gears/Hed_MSK007.png","gears/Hed_MSK008.png","gears/Hed_MSK011.png","gears/Hed_MSK014.png","gears/Hed_MSK015.png","gears/Hed_MSK016.png","gears/Hed_MSN000.png","gears/Hed_MSN004.png","gears/Hed_MSN109.png","gears/Hed_MSN110.png","gears/Hed_MSN111.png","gears/Hed_MSN302.png","gears/Hed_MSN303.png","gears/Hed_MSN304.png","gears/Hed_MSN305.png","gears/Hed_MSN306.png","gears/Hed_MSN310.png","gears/Hed_NCP000.png","gears/Hed_NCP001.png","gears/Hed_NCP002.png","gears/Hed_NCP003.png","gears/Hed_NCP004.png","gears/Hed_NCP005.png","gears/Hed_NCP008.png","gears/Hed_NCP009.png","gears/Hed_NCP013.png","gears/Hed_TRG000.png","gears/Hed_VIS000.png","gears/Hed_VIS001.png","gears/Hed_VIS002.png","gears/Hed_VIS003.png","gears/Hed_VIS004.png","gears/Shs_AMB000.png","gears/Shs_AMB001.png","gears/Shs_AMB002.png","gears/Shs_AMB003.png","gears/Shs_AMB004.png","gears/Shs_AMB005.png","gears/Shs_AMB006.png","gears/Shs_AMB007.png","gears/Shs_AMB008.png","gears/Shs_AMB009.png","gears/Shs_AMB010.png","gears/Shs_AMB011.png","gears/Shs_AMB012.png","gears/Shs_AMB013.png","gears/Shs_AMB014.png","gears/Shs_AMB015.png","gears/Shs_BOT000.png","gears/Shs_BOT001.png","gears/Shs_BOT002.png","gears/Shs_BOT003.png","gears/Shs_BOT004.png","gears/Shs_BOT005.png","gears/Shs_BOT006.png","gears/Shs_BOT007.png","gears/Shs_BOT008.png","gears/Shs_BOT009.png","gears/Shs_BOT010.png","gears/Shs_BOT012.png","gears/Shs_BOT013.png","gears/Shs_BOT019.png","gears/Shs_BOT020.png","gears/Shs_BOT021.png","gears/Shs_BOT023.png","gears/Shs_BOT025.png","gears/Shs_BOT026.png","gears/Shs_BOT027.png","gears/Shs_CFS000.png","gears/Shs_CFS001.png","gears/Shs_COP101.png","gears/Shs_LTS000.png","gears/Shs_LTS001.png","gears/Shs_LTS002.png","gears/Shs_LTS003.png","gears/Shs_LTS004.png","gears/Shs_LTS005.png","gears/Shs_LTS007.png","gears/Shs_LTS010.png","gears/Shs_LTS011.png","gears/Shs_LTS013.png","gears/Shs_LTS014.png","gears/Shs_MSN000.png","gears/Shs_MSN004.png","gears/Shs_MSN110.png","gears/Shs_MSN301.png","gears/Shs_MSN302.png","gears/Shs_MSN303.png","gears/Shs_MSN304.png","gears/Shs_MSN305.png","gears/Shs_MSN306.png","gears/Shs_MSN310.png","gears/Shs_SDL000.png","gears/Shs_SDL001.png","gears/Shs_SDL003.png","gears/Shs_SDL004.png","gears/Shs_SDL005.png","gears/Shs_SDL006.png","gears/Shs_SDL007.png","gears/Shs_SDL008.png","gears/Shs_SDL010.png","gears/Shs_SDL011.png","gears/Shs_SDL012.png","gears/Shs_SDL013.png","gears/Shs_SDL017.png","gears/Shs_SDL018.png","gears/Shs_SDL019.png","gears/Shs_SDL020.png","gears/Shs_SDL021.png","gears/Shs_SDL022.png","gears/Shs_SHI000.png","gears/Shs_SHI001.png","gears/Shs_SHI002.png","gears/Shs_SHI003.png","gears/Shs_SHI004.png","gears/Shs_SHI005.png","gears/Shs_SHI006.png","gears/Shs_SHI008.png","gears/Shs_SHI009.png","gears/Shs_SHI010.png","gears/Shs_SHI011.png","gears/Shs_SHI016.png","gears/Shs_SHI017.png","gears/Shs_SHI018.png","gears/Shs_SHI025.png","gears/Shs_SHI042.png","gears/Shs_SHI043.png","gears/Shs_SHI045.png","gears/Shs_SHI046.png","gears/Shs_SHI047.png","gears/Shs_SHI048.png","gears/Shs_SHI052.png","gears/Shs_SHT000.png","gears/Shs_SHT001.png","gears/Shs_SHT002.png","gears/Shs_SHT003.png","gears/Shs_SHT004.png","gears/Shs_SHT005.png","gears/Shs_SHT006.png","gears/Shs_SHT007.png","gears/Shs_SHT008.png","gears/Shs_SHT009.png","gears/Shs_SHT012.png","gears/Shs_SHT013.png","gears/Shs_SHT020.png","gears/Shs_SHT022.png","gears/Shs_SHT023.png","gears/Shs_SHT024.png","gears/Shs_SHT025.png","gears/Shs_SHT026.png","gears/Shs_SLO000.png","gears/Shs_SLO001.png","gears/Shs_SLO002.png","gears/Shs_SLO003.png","gears/Shs_SLO004.png","gears/Shs_SLO005.png","gears/Shs_SLO006.png","gears/Shs_SLO007.png","gears/Shs_SLO008.png","gears/Shs_SLO009.png","gears/Shs_SLO010.png","gears/Shs_SLO011.png","gears/Shs_SLO012.png","gears/Shs_SLO021.png","gears/Shs_SLO022.png","gears/Shs_SLO023.png","gears/Shs_SLO024.png","gears/Shs_SLO025.png","gears/Shs_SLP000.png","gears/Shs_SLP001.png","gears/Shs_SLP002.png","gears/Shs_SLP004.png","gears/Shs_TRG000.png","gears/Shs_TRS000.png","gears/Shs_TRS001.png","skills/Action_Up.png","skills/ComeBack.png","skills/DeathMarking.png","skills/EndAllUp.png","skills/ExSkillDouble.png","skills/Exorcist.png","skills/HumanMove_Up.png","skills/InkRecovery_Up.png","skills/JumpTime_Save.png","skills/MainInk_Save.png","skills/MinorityUp.png","skills/ObjectEffect_Up.png","skills/OpInkEffect_Reduction.png","skills/RespawnSpecialGauge_Save.png","skills/RespawnTime_Save.png","skills/SomersaultLanding.png","skills/SpecialIncrease_Up.png","skills/SpecialSpec_Up.png","skills/SquidMoveSpatter_Reduction.png","skills/SquidMove_Up.png","skills/StartAllUp.png","skills/SubEffect_Reduction.png","skills/SubInk_Save.png","skills/SubSpec_Up.png","skills/SuperJumpSign_Hide.png","skills/ThermalInk.png","skills/Unknown.png","subspe/Dummy.png","subspe/Wsb_Beacon00.png","subspe/Wsb_Bomb_Curling00.png","subspe/Wsb_Bomb_Fizzy00.png","subspe/Wsb_Bomb_Quick00.png","subspe/Wsb_Bomb_Robot00.png","subspe/Wsb_Bomb_Splash00.png","subspe/Wsb_Bomb_Suction00.png","subspe/Wsb_Bomb_Torpedo00.png","subspe/Wsb_LineMarker00.png","subspe/Wsb_PointSensor00.png","subspe/Wsb_PoisonMist00.png","subspe/Wsb_SalmonBuddy00.png","subspe/Wsb_Shield00.png","subspe/Wsb_Sprinkler00.png","subspe/Wsb_Trap00.png","subspe/Wsp_SpBlower00.png","subspe/Wsp_SpCastle00.png","subspe/Wsp_SpChariot00.png","subspe/Wsp_SpEnergyStand00.png","subspe/Wsp_SpFirework00.png","subspe/Wsp_SpGachihoko00.png","subspe/Wsp_SpGreatBarrier00.png","subspe/Wsp_SpInkStorm00.png","subspe/Wsp_SpJetpack00.png","subspe/Wsp_SpMicroLaser00.png","subspe/Wsp_SpMultiMissile00.png","subspe/Wsp_SpNiceBall00.png","subspe/Wsp_SpShockSonar00.png","subspe/Wsp_SpSkewer00.png","subspe/Wsp_SpSuperHook00.png","subspe/Wsp_SpSuperLanding00.png","subspe/Wsp_SpTripleTornado00.png","subspe/Wsp_SpUltraShot00.png","subspe/Wsp_SpUltraStamp00.png","weapon_flat/Dummy.png","weapon_flat/Path_Wsp_Shachihoko.png","weapon_flat/Path_Wst_Blaster_Bear.png","weapon_flat/Path_Wst_Blaster_LightLong_00.png","weapon_flat/Path_Wst_Blaster_LightShort_00.png","weapon_flat/Path_Wst_Blaster_LightShort_01.png","weapon_flat/Path_Wst_Blaster_Light_00.png","weapon_flat/Path_Wst_Blaster_Light_01.png","weapon_flat/Path_Wst_Blaster_Long_00.png","weapon_flat/Path_Wst_Blaster_Middle_00.png","weapon_flat/Path_Wst_Blaster_Short_00.png","weapon_flat/Path_Wst_Blaster_Short_01.png","weapon_flat/Path_Wst_Brush_Mini_00.png","weapon_flat/Path_Wst_Brush_Mini_01.png","weapon_flat/Path_Wst_Brush_Normal_00.png","weapon_flat/Path_Wst_Charger_Bear.png","weapon_flat/Path_Wst_Charger_Keeper_00.png","weapon_flat/Path_Wst_Charger_Light_00.png","weapon_flat/Path_Wst_Charger_LongScope_00.png","weapon_flat/Path_Wst_Charger_Long_00.png","weapon_flat/Path_Wst_Charger_NormalScope_00.png","weapon_flat/Path_Wst_Charger_NormalScope_01.png","weapon_flat/Path_Wst_Charger_Normal_00.png","weapon_flat/Path_Wst_Charger_Normal_01.png","weapon_flat/Path_Wst_Charger_Pencil_00.png","weapon_flat/Path_Wst_Charger_Quick_00.png","weapon_flat/Path_Wst_Maneuver_Dual_00.png","weapon_flat/Path_Wst_Maneuver_Gallon_00.png","weapon_flat/Path_Wst_Maneuver_Normal_00.png","weapon_flat/Path_Wst_Maneuver_Short_00.png","weapon_flat/Path_Wst_Maneuver_Short_01.png","weapon_flat/Path_Wst_Maneuver_Stepper_00.png","weapon_flat/Path_Wst_Roller_Compact_00.png","weapon_flat/Path_Wst_Roller_Compact_01.png","weapon_flat/Path_Wst_Roller_Heavy_00.png","weapon_flat/Path_Wst_Roller_Hunter_00.png","weapon_flat/Path_Wst_Roller_Normal_00.png","weapon_flat/Path_Wst_Roller_Normal_01.png","weapon_flat/Path_Wst_Roller_Wide_00.png","weapon_flat/Path_Wst_Saber_Bear.png","weapon_flat/Path_Wst_Saber_Lite_00.png","weapon_flat/Path_Wst_Saber_Normal_00.png","weapon_flat/Path_Wst_Shelter_Bear.png","weapon_flat/Path_Wst_Shelter_Compact_00.png","weapon_flat/Path_Wst_Shelter_Normal_00.png","weapon_flat/Path_Wst_Shelter_Wide_00.png","weapon_flat/Path_Wst_Shooter_Blaze_00.png","weapon_flat/Path_Wst_Shooter_Blaze_01.png","weapon_flat/Path_Wst_Shooter_Expert_00.png","weapon_flat/Path_Wst_Shooter_Expert_01.png","weapon_flat/Path_Wst_Shooter_First_00.png","weapon_flat/Path_Wst_Shooter_First_01.png","weapon_flat/Path_Wst_Shooter_Flash_00.png","weapon_flat/Path_Wst_Shooter_Gravity_00.png","weapon_flat/Path_Wst_Shooter_Heavy_00.png","weapon_flat/Path_Wst_Shooter_Heavy_01.png","weapon_flat/Path_Wst_Shooter_Long_00.png","weapon_flat/Path_Wst_Shooter_Long_01.png","weapon_flat/Path_Wst_Shooter_Normal_00.png","weapon_flat/Path_Wst_Shooter_Normal_01.png","weapon_flat/Path_Wst_Shooter_Normal_H.png","weapon_flat/Path_Wst_Shooter_Precision_00.png","weapon_flat/Path_Wst_Shooter_Precision_01.png","weapon_flat/Path_Wst_Shooter_QuickLong_00.png","weapon_flat/Path_Wst_Shooter_QuickMiddle_00.png","weapon_flat/Path_Wst_Shooter_QuickMiddle_01.png","weapon_flat/Path_Wst_Shooter_Short_00.png","weapon_flat/Path_Wst_Shooter_Short_01.png","weapon_flat/Path_Wst_Shooter_TripleMiddle_00.png","weapon_flat/Path_Wst_Shooter_TripleQuick_00.png","weapon_flat/Path_Wst_Shooter_TripleQuick_01.png","weapon_flat/Path_Wst_Slosher_Bathtub_00.png","weapon_flat/Path_Wst_Slosher_Bear.png","weapon_flat/Path_Wst_Slosher_Diffusion_00.png","weapon_flat/Path_Wst_Slosher_Diffusion_01.png","weapon_flat/Path_Wst_Slosher_Launcher_00.png","weapon_flat/Path_Wst_Slosher_Strong_00.png","weapon_flat/Path_Wst_Slosher_Strong_01.png","weapon_flat/Path_Wst_Slosher_Washtub_00.png","weapon_flat/Path_Wst_Spinner_Downpour_00.png","weapon_flat/Path_Wst_Spinner_Hyper_00.png","weapon_flat/Path_Wst_Spinner_Quick_00.png","weapon_flat/Path_Wst_Spinner_Quick_01.png","weapon_flat/Path_Wst_Spinner_Serein_00.png","weapon_flat/Path_Wst_Spinner_Standard_00.png","weapon_flat/Path_Wst_Stringer_Bear.png","weapon_flat/Path_Wst_Stringer_Normal_00.png","weapon_flat/Path_Wst_Stringer_Short_00.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.63e82a5f.mjs","imports":["_app/immutable/entry/start.63e82a5f.mjs","_app/immutable/chunks/index.deb332b0.mjs","_app/immutable/chunks/singletons.83f2b232.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.439862e8.mjs","imports":["_app/immutable/entry/app.439862e8.mjs","_app/immutable/chunks/index.deb332b0.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(protected)/gears",
				pattern: /^\/gears\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(protected)/gears/build",
				pattern: /^\/gears\/build\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(protected)/loadouts",
				pattern: /^\/loadouts\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(protected)/loadouts/build",
				pattern: /^\/loadouts\/build\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(auth)/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(auth)/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
