// data.js
const data = {
    "website": "Auto Dijelovi Expert",
    "categories": [
        { 
            "id": 0,
            "name" : "Motor i pogon",
            "image" : "motor_pogon.jpg",
            "products" : [
                { "name": "Zupčasti remen Continental", "image": "contitech_belt.jpg", "price": 45.99 },
                { "name": "Set kvačila LUK sa zamajcem", "image": "luk_clutch.jpg", "price": 450.00 },
                { "name": "Nosač motora Lemförder", "image": "engine_mount.jpg", "price": 32.50 },
                { "name": "Brtva glave motora Elring", "image": "head_gasket.jpg", "price": 18.75 },
                { "name": "Lanac razvoda SKF set", "image": "timing_chain.jpg", "price": 120.00 }
            ]
        },
        { 
            "id": 1,
            "name" : "Kočioni sustav",
            "image" : "kocnice.jpg",
            "products" : [
                { "name": "Kočioni disk Brembo Xtra", "image": "brembo_disk.jpg", "price": 85.00 },
                { "name": "Kočione pločice ATE Ceramic", "image": "ate_pads.jpg", "price": 55.40 },
                { "name": "Kočiona kliješta TRW", "image": "trw_caliper.jpg", "price": 110.00 },
                { "name": "Glavni kočioni cilindar Bosch", "image": "brake_cylinder.jpg", "price": 75.20 },
                { "name": "Senzor ABS-a Delphi", "image": "abs_sensor.jpg", "price": 22.00 }
            ]
        },
        { 
            "id": 2,
            "name" : "Ovjes i upravljanje",
            "image" : "ovjes.jpg",
            "products" : [
                { "name": "Amortizer Sachs Gas", "image": "sachs_shock.jpg", "price": 65.00 },
                { "name": "Vilica ovjesa Moog", "image": "control_arm.jpg", "price": 88.00 },
                { "name": "Stabilizator štanga Meyle HD", "image": "sway_bar.jpg", "price": 15.50 },
                { "name": "Kugla ovjesa Febi Bilstein", "image": "ball_joint.jpg", "price": 12.30 },
                { "name": "Opruga ovjesa KYB", "image": "coil_spring.jpg", "price": 40.00 }
            ]
        },
        { 
            "id": 3,
            "name" : "Ispušni sustav",
            "image" : "ispuh.jpg",
            "products" : [
                { "name": "Zadnji ispušni lonac Walker", "image": "muffler.jpg", "price": 95.00 },
                { "name": "Katalizator BM Catalysts", "image": "catalytic.jpg", "price": 280.00 },
                { "name": "DPF filter čestica", "image": "dpf_filter.jpg", "price": 550.00 },
                { "name": "Lambda sonda NGK", "image": "lambda_sensor.jpg", "price": 68.00 },
                { "name": "Nosač ispuha gumeni", "image": "exhaust_mount.jpg", "price": 4.50 }
            ]
        },
        { 
            "id": 4,
            "name" : "Elektrika i elektronika",
            "image" : "elektrika.jpg",
            "products" : [
                { "name": "Akumulator Varta Silver 74Ah", "image": "varta_74ah.jpg", "price": 115.00 },
                { "name": "Alternator Valeo 120A", "image": "alternator.jpg", "price": 190.00 },
                { "name": "Elektropokretač Denso", "image": "starter_motor.jpg", "price": 145.00 },
                { "name": "Indukcijski svitak Beru", "image": "ignition_coil.jpg", "price": 35.00 },
                { "name": "Prekidač svjetala", "image": "light_switch.jpg", "price": 25.00 }
            ]
        },
        { 
            "id": 5,
            "name" : "Hlađenje i grijanje",
            "image" : "hladjenje.jpg",
            "products" : [
                { "name": "Hladnjak vode Nissens", "image": "radiator.jpg", "price": 82.00 },
                { "name": "Pumpa vode Airtex", "image": "water_pump.jpg", "price": 48.50 },
                { "name": "Termostat Mahle", "image": "thermostat.jpg", "price": 21.00 },
                { "name": "Ekspanzijska posuda", "image": "coolant_tank.jpg", "price": 30.00 },
                { "name": "Hladnjak klime Denso", "image": "ac_condenser.jpg", "price": 105.00 }
            ]
        },
        { 
            "id": 6,
            "name" : "Sustav goriva",
            "image" : "gorivo.jpg",
            "products" : [
                { "name": "Pumpa goriva Pierburg", "image": "fuel_pump.jpg", "price": 130.00 },
                { "name": "Brizgaljka goriva Bosch", "image": "injector.jpg", "price": 210.00 },
                { "name": "MAF senzor Magneti Marelli", "image": "maf_sensor.jpg", "price": 72.00 },
                { "name": "Regulator tlaka goriva", "image": "fuel_regulator.jpg", "price": 44.00 },
                { "name": "Senzor tlaka turbine", "image": "boost_sensor.jpg", "price": 38.00 }
            ]
        },
        { 
            "id": 7,
            "name" : "Karoserija i rasvjeta",
            "image" : "karoserija.jpg",
            "products" : [
                { "name": "Prednji far Hella (Lijevi)", "image": "headlight_hella.jpg", "price": 165.00 },
                { "name": "Retrovizor s grijačem", "image": "mirror.jpg", "price": 52.00 },
                { "name": "Brisači Bosch Aerotwin", "image": "bosch_wiper.jpg", "price": 28.00 },
                { "name": "Podizač stakla električni", "image": "window_regulator.jpg", "price": 64.00 },
                { "name": "Stražnje svjetlo LED", "image": "tail_light.jpg", "price": 92.00 }
            ]
        },
        { 
            "id": 8,
            "name" : "Filteri",
            "image" : "filteri.jpg",
            "products" : [
                { "name": "Filter ulja Purflux", "image": "oil_filter.jpg", "price": 8.50 },
                { "name": "Filter zraka UFI", "image": "air_filter.jpg", "price": 14.20 },
                { "name": "Filter goriva Hengst", "image": "fuel_filter.jpg", "price": 22.00 },
                { "name": "Filter kabine Denso", "image": "cabin_filter.jpg", "price": 16.50 },
                { "name": "Filter mjenjača", "image": "at_filter.jpg", "price": 35.00 }
            ]
        },
        { 
            "id": 9,
            "name" : "Ulja i tekućine",
            "image" : "ulja.jpg",
            "products" : [
                { "name": "Liqui Moly 5W-30 5L", "image": "liquimoly_5w30.jpg", "price": 58.00 },
                { "name": "Kočiona tekućina ATE DOT4", "image": "ate_dot4.jpg", "price": 12.00 },
                { "name": "Antifriz G12+ 3L", "image": "antifriz_g12.jpg", "price": 15.00 },
                { "name": "Ulje za mjenjač Motul", "image": "motul_gear.jpg", "price": 18.50 },
                { "name": "Tekućina za stakla zimski set", "image": "screenwash.jpg", "price": 7.00 }
            ]
        }
    ]
};