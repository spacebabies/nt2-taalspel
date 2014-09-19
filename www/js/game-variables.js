var pvnImgs = ['img/ik.png', 'img/jij.png', 'img/hijzijhet.png', 'img/u.png', 
			'img/wijjulliezij.png', 'img/joker.png']

var tijdImgs = ['img/prf.png', 'img/PRE.png', 'img/IMP.png']

var simpleTijdImgs = ['img/PRE.png', 'img/IMP.png']

var zinImgs = ['img/H.png', 'img/hi.png', 'img/IV.png', 'img/V.png']

var modeImgs = ['img/PV.png', 'img/inf.png', 'img/PAR.png']

var basisImgs = ['img/Omdat.png', 'img/Hoewel.png', 'img/Als.png', 'img/Toen.png', 
			'img/Sinds.png', 'img/Terwijl.png', 'img/joker.png']

var extraImgs = ['img/Omdat.png', 'img/Hoewel.png', 'img/Als.png', 'img/Toen.png', 
			'img/Sinds.png', 'img/Terwijl.png', 'img/Nadat.png', 'img/Voordat.png', 
			'img/Doordat.png','img/joker.png']

var relPronImgs = ['img/DieDatprep.png', 'img/WaarWieprep.png']

var startWords = ['doen', 'pakken', 'maken', 'eten', 'slapen', 'lezen', 'studeren', 'gebruiken',  
                'schrijven',  'kopen', 'lopen', 'betalen',
                'oefenen', 'praten', 'reizen',
                'verdienen', 'verhuizen',
                'leren', 'gaan', 'helpen',
                'hebben', 'komen', 'krijgen', 'liggen',
                'spreken', 'vergeten', 'zijn', 'zitten', 'begrijpen']

var modaalWords = ['kunnen', 'willen', 'mogen', 'moeten', 'gaan', 'zullen']

var prepoWords = ['luisteren naar', 'kijken naar', 'gaan naar', 'denken aan', 'geven aan', 
                'houden van', 'praten met', 'wachten op', 'zorgen voor', 'beginnen met',
                'vragen aan', 'praten over', 'stoppen met', 'zakken voor', 'slagen voor',
                'helpen met', 'zeggen tegen', 'kennismaken met', 'klagen over',
                'logeren bij', 'protesteren tegen', 'vertrouwen op', 'waarschuwen voor',
                'blijken uit', 'liegen over', 'liegen tegen', 'lijden aan', 'lachen om',
                'dromen van', 'zetten op', 'zetten in', 'leggen in', 'leggen op',
                'denken aan', 'geven aan', 'sturen naar', 'zitten op']

var separabelWords = ['voorbereiden', 'kennismaken', 'meedoen', 'meenemen', 'neerleggen', 
                'neerzetten', 'oplossen', 'afsluiten', 'opbellen', 'schoonmaken', 
                'thuiskomen', 'uitleggen', 'uitnodigen', 'uitstappen', 'aanwijzen', 
                'binnenkomen', 'doorbrengen', 'goedkeuren', 'instappen', 'weggaan',
                'loslaten', 'aantrekken', 'uittrekken', 'ophangen', 'aanzetten',
                'uitzetten', 'dichtdoen', 'opendoen']

var infWords = ['staan te', 'liggen te', 'lopen te', 'proberen te', 'zitten te', 
                '(niet) durven te', 'weigeren te', 'hoeven (niet) te', 'laten', 'leren', 
                'blijven', 'komen']

var easyCjWords = ['maken', 'doen', 'gaan', 'kopen', 'eten', 'werken', 'wonen']

var extraWords = ['vergeten', 'leren', 'lopen']
var hardCjWords = easyCjWords.concat(extraWords);

var relapWords = ['de man', 'het boek', 'de docent', 'het huis', 'het land', 'de jas',
                'de vriend/vriendin', 'de laptop', 'het probleem', 'het televisieprogramma',
                'de mening', 'het feestje', 'de student', 'de vrouw', 'de baan', 'de muziek',
                'de stad', 'de fiets', 'het kind', 'het verhaal', 'de oefening',
                'het werkwoord', 'de dag', 'het recept', 'het jaar', 'de tuin',
                'de schoenen', 'de supermarkt', 'het appartement', 'het openbaar vervoer',
                'de vakantie', 'de email', 'de website']

var indirectWords = ['vragen of', 'zeggen dat', 'willen weten of', 'geloven dat', 
                    'twijfelen of', 'hopen dat', '(niet) weten of', 'denken dat',
                    'weten dat', 'zich afvragen of']

var wetenschapWords = ['blijken', 'het onderzoek', 'de grafiek', 'afnemen', 
                    'de oorzaak', 'het probleem', 'het resultaat', 'de conclusie', 
                    'stijgen', 'het aantal', 'de mening', 'het feit', 'de toekomst',
                    'verwachten', 'opvallend', 'de piek', 'het hoogtepunt',
                    'het dieptepunt', 'de publicatie', 'onderzoeken', 'vergelijken']

var seizoenWords = ['het terrasje', 'de paraplu', 'warm', 'buiten', 'binnen', 'het biertje', 
                'het wijntje', 'gezellig', 'de sneeuw', 'de kleding', 'de zon', 'het café', 
                'het weer', 'koud', 'de winterjas', 'donker', 'licht', 'vroeg', 'laat',
                'de bikini', 'zwemmen', 'barbecuën', 'het balkon', 'de tuin', 'de vakantie',
                'de wintersport', 'skiën', 'warme chocomel met slagroom', 'de herfst',
                'de zomer', 'de lente', 'de winter', 'regenen', 'vriezen', 'het ijs',
                'schaatsen', 'De Elfstedentocht', 'de erwtensoep', 'de stamppot',
                'de bladeren', 'de kleuren']

var feestjeWords = ['het werk', 'drinken', 'de vriend/vriendin', 'wonen', 'de relatie', 
                'Nederland', 'moeilijk', 'het boek', 'leuk', 'de muziek', 
                'het televisieprogramma', 'de film',  'de discussie', 'de taal', 'het weer', 
                'vroeger', '(mijn) broer/zus', '(mijn) vader/moeder', 'de vakantie', 
                'de cultuur', 'de sport', 'de alcohol', 'het restaurant', 'de toekomst',
                'de vriendschap', 'verhuizen', 'de kinderen', 'de baan', 'het etentje',
                'het sigaretje', 'roken', 'het toastje', 'de speech', 'proosten',
                'de taart', 'jarig zijn', 'de leeftijd', 'samen']

var foodWords = ['koken', 'het ingrediënt', 'de markt', 'de winkel', 'het gerecht', 'lekker', 
            '(niet) houden van', 'snijden', 'bakken', 'de keuken', 'het bestek', 'het bord', 
            'gezellig', 'de tafel', 'het toetje', 'de tafel dekken', 'proeven', 'genieten',
            'het voorgerecht', 'het hoofdgerecht', 'het nagerecht', 'het aperitief', 'wassen',
            'voorbereiden', 'de oven', 'bakken', 'braden', 'het vlees', 'de vis', 'de groenten',
            'de kaas', 'opeten', 'smakken', 'het servet', 'het wijnglas', 'de rode wijn',
            'de witte wijn', 'de kaarsen', 'de saus', 'de stamppot', 'de jus', 'opdienen',
            'afwassen']

// Organising and turning on/off //
var dobbels = ['#dobbel-1-start', '#dobbel-2-start', '#dobbel-3-start', 
			'#dobbel-1-modal', '#dobbel-3-modal', 
			'#dobbel-1-prepos', '#dobbel-2-prepos', '#dobbel-3-prepos',  
			'#dobbel-easy-cj', '#dobbel-hard-cj', 
			'#dobbel-1-indirect', '#dobbel-2-indirect', 
			'#dobbel-2-wetsch', '#dobbel-3-wetsch',
			'#dobbel-2-season', '#dobbel-3-season', 
			'#dobbel-2-party', '#dobbel-3-party', 
			'#dobbel-2-food', '#dobbel-3-food']

var entrances = ['#start-click', '#modal-click', '#prepos-click', '#sepa-click', 
            '#inf-click', '#easy-cj-click', '#hard-cj-click', '#relatief-click', 
            '#indirect-click', '#wetsch-click', '#season-click', '#party-click', 
            '#food-click']
