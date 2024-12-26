import { generateUserPassword } from "./bcrypt.js"
import 'dotenv/config';
const PORT = process.env.PORT || 8181;

const initialUsers = [
  {
    name: {
      first: 'Yotta',
      middle: 'A.',
      last: 'Terracotta',
    },
    email: 'yotta@terracotta.com',
    password: generateUserPassword('1yotta!Terracotta'),
    phone: '050-0000001',
    address: {
      country: 'USA',
      state: 'North Carolina',
      city: 'Charlotte',
      street: 'Maple St',
      houseNumber: 1,
      zip: 28269,
    },
    order_ids: [],
    isEmployee: true,
    isAdmin: true,
  },
  {
    name: {
      first: 'Laura',
      middle: '',
      last: 'Thompson',
    },
    email: 'lthompson@petme.com',
    password: generateUserPassword('L@thompson321'),
    phone: '012-345 6788',
    address: {
      country: 'USA',
      state: 'New York',
      city: 'New York City',
      street: '456 Oak St',
      houseNumber: 2,
      zip: 10001,
    },
    order_ids: [],
    isEmployee: true,
    isAdmin: false,
  },
  {
    name: {
      first: 'Peter',
      middle: '',
      last: 'Jones',
    },
    email: 'peterjones@test.com',
    password: generateUserPassword('peterJones!123'),
    phone: '012-345 6787',
    address: {
      country: 'USA',
      state: 'Texas',
      city: 'Houston',
      street: '789 Pine St',
      houseNumber: 3,
      zip: 77001,
    },
    order_ids: [],
    isEmployee: false,
    isAdmin: false,
  }
]

const initialPets = [
  { name: 'Dogs' }, { name: 'Cats' }, { name: 'Birds' }, { name: 'Fish' }, { name: 'Rodents' }, { name: 'Reptiles' },
]

const initialCategories = [
  { name: 'Food', description: 'Pet food products that offer balanced nutrition for animals, including dry, wet, and specialized diet options for various types of pets. This includes grain-free, organic, or veterinary-approved formulas.' },
  { name: 'Treats', description: 'A range of tasty snacks designed for rewarding pets during training or as a treat. These include dental chews, training treats, rawhide bones, and species-specific snacks like catnip for cats or chew sticks for small mammals.' },
  { name: 'Toys', description: 'Interactive, durable, and entertaining products for pets that promote exercise and mental stimulation. Includes plush toys, squeaky toys, chew toys, laser pointers, and puzzle feeders tailored to different pet species..' },
  { name: 'Bedding & Furniture', description: 'Comfortable sleeping arrangements and furniture for pets, including beds, mats, hammocks, scratching posts, and pet-specific furniture like cat trees or small pet habitats.' },
  { name: 'Grooming Products', description: 'Essential care products to maintain pet hygiene, such as shampoos, brushes, nail clippers, ear cleaners, and deshedding tools. These products cater to different skin and fur types, including sensitive and medicated options.' },
  { name: 'Health & Wellness', description: 'Products aimed at supporting the overall health of pets, including vitamins, supplements, flea/tick prevention, dental care items, first aid kits, and specialized medications for common pet health issues.' },
  { name: 'Clothing & Accessories', description: 'Apparel and functional accessories designed for pets, such as sweaters, raincoats, booties, and harnesses. This category also includes decorative items like bandanas and seasonal costumes for pets.' },
  { name: 'Feeding & Watering Supplies', description: 'Bowls, dispensers, and feeders that help with portion control and hydration. Includes automatic feeders, water fountains, slow-feeder bowls, and portable travel bowls for pets.' },
  { name: 'Training & Behaviour Aids', description: 'Products that assist in training pets and modifying behavior. This includes training clickers, pee pads, litter boxes, calming collars, and gates or crates for managing pets indoors.' },
  { name: 'Travel & Outdoor Gear', description: 'Equipment and supplies that make traveling with pets safer and more comfortable, including carriers, car seat covers, pet strollers, life jackets, and outdoor gear like dog backpacks and outdoor kennels.' },
  { name: 'Pet Tech', description: 'Technology-focused products designed for pet care, including GPS trackers, activity monitors, smart collars, and interactive devices like treat dispensers and pet cameras that connect to apps.' },
]

const initialProducts = [
  {
    name: 'Authority® Everyday Health Cat Wet Food - 66 Oz, Flaked in Gravy, With-Grain',
    description: 'This Authority Everyday Health Wet Cat Food Variety Pack provides your adult cat with a number of delicious choices at mealtime. Treat your kitty to salmon, chicken, and tuna-flavored wet meals that are rich on taste and made with ingredients you can feel good about serving.',
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5304983?fmt=webp&wid=1400&hei=1400',
      alt: 'Authority® Everyday Health Cat Wet Food - 66 Oz, Flaked in Gravy, With-Grain',
    },
    price: 22,
    stock: 150,
    category_id: `Food`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Hill's® Science Diet® Perfect Weight Adult Dry Cat Food - Chicken`,
    description: `Hill's Science Diet Perfect Weight dry cat food provides delicious, breakthrough weight management nutrition with clinically proven technology for safe & effective weight loss with visible results within 10 weeks. In addition to healthy weight maintenance & long lasting weight support, this food also offers lean muscle support.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5209028?fmt=webp&wid=1400&hei=1400',
      alt: `Hill's® Science Diet® Perfect Weight Adult Dry Cat Food - Chickene`,
    },
    price: 65,
    stock: 75,
    category_id: `Food`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: 'Hartz Delectables™ Squeeze Up Puree Variety Pack - 20 Pack',
    description: 'This Hartz Delectables Squeeze Up Variety pack features treats with a rich, thick puree in a lickable tube that you can hand feed for a fun and delicious treat. Your kitty will love the delicious flavor combination of tuna and salmon in this unique treat.',
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5322896?fmt=webp&wid=1400&hei=1400',
      alt: 'Hartz Delectables™ Squeeze Up Puree Variety Pack - 20 Pack',
    },
    price: 13,
    stock: 20,
    category_id: `Treats`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: 'Temptations™ Mixups Cat Treats - Soft & Crunchy, Catnip Fever',
    description: `Did your fussy feline greet you with a chorus of purrs when you got home? Reward your cat with a mix-n-match of their favorite playtime cat treats. Temptations MixUps Catnip Fever is a trifecta of tempting treats with a mix of chicken, catnip, and cheese flavors. Each of these tasty cat treats has less than 2 calories and provides an irresistible combination of both crunchy and soft textures. They're excellent- sized treats for cat toys, so try placing a few inside a treat dispenser toy and watch your furball chase and swat away.Temptations MixUps comes in a resealable, Super Value - sized tub, so your fur - friend can enjoy their favorite cat treats when you open it but not when they shouldn't! Temptations MixUps are the purr-fect crunchy and soft cat snack to show your feline friend how much you care.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5231863?fmt=webp&wid=1400&hei=1400',
      alt: 'Temptations™ Mixups Cat Treats - Soft & Crunchy, Catnip Fever',
    },
    price: 9.60,
    stock: 20,
    category_id: `Treats`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Whisker City® Crinkle Ball Cat Toy - (COLOR VARIES)`,
    description: `Please allow us to choose one for you. We cannot guarantee a specific color. Your kitty will have a great time playing with this Whisker City Crinkle Ball. This fun ball is the perfect play time toy for your feline friend, promises hours of activity and entertainment swatting and pouncing the day away.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5287984?fmt=webp&wid=800&hei=800',
      alt: `Whisker City® Crinkle Ball Cat Toy - (COLOR VARIES)`,
    },
    price: 2,
    stock: 20,
    category_id: `Toys`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Whisker City Space Cat Wavy Basic Corrugate Cat Scratcher`,
    description: `This Whisker City Space Cat Wavy Basic Corrugate Cat Scratcher encourages your kitty's natural scratching instincts. It also features a fun wavy design to pique your cat's interest even more, and encourages the kinds of positive scratching behaviors you can feel good about.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5351012?fmt=webp&wid=800&hei=800',
      alt: `Whisker City Space Cat Wavy Basic Corrugate Cat Scratcher`,
    },
    price: 10,
    stock: 20,
    category_id: `Toys`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Whisker City® 29.5-in Laid-Back Lookout with Catnip Cat Tree`,
    description: `Tell your kitty to hold on to its whiskers! This Fantastically fun Whisker City Plush Short Laid-Back Lookout has everything your kitty loves. With soft places to nap or lounge, sisal scratching posts, and room to perch and play, who knows what your furry friends will get up to? Add some of the included catnip for extra awesome fun!`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5337504?fmt=webp&wid=800&hei=800',
      alt: `Whisker City® 29.5-in Laid-Back Lookout with Catnip Cat Tree`,
    },
    price: 70,
    stock: 20,
    category_id: `Bedding & Furniture`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Whisker City® White Mohair Fur Donut Cat Bed`,
    description: `Provide your kitty with a place to find true relaxation with this Whisker City White Mohair Fur Donut Cat Bed. Your cat will love sinking into this soft and comfortable bed, which features an overstuffed mohair fur design. What a great place for your feline to find rest and deep sleep.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5305228?fmt=webp&wid=800&hei=800',
      alt: `Whisker City® White Mohair Fur Donut Cat Bed`,
    },
    price: 35,
    stock: 20,
    category_id: `Bedding & Furniture`,
    petType_id: [`Cats`, `Dogs`],
    discount: 0
  },
  {
    name: `FURminator® Long Hair Undercoat deShedding Cat Tool`,
    description: `FURminator offers a full line of tools, shampoos, conditioners and sprays to make sure you are equipped for all steps of the grooming process. The FURminator Undercoat deShedding Tool for cats removes the loose hair from shedding. The stainless steel deShedding edge reaches through topcoat to safely and easily remove loose hair and undercoat without damaging topcoat or cutting skin when used as directed. Use the FURejector button to release hair with ease, making deShedding easier than ever! The ergonomic handle provides you with comfort, while the curved edge conforms to your pet's natural build and shape for their comfort. This tool is made for medium/large cats, weighing >10 lbs, with long hair.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5280403?fmt=webp&wid=800&hei=800',
      alt: `FURminator® Long Hair Undercoat deShedding Cat Tool`,
    },
    price: 34,
    stock: 20,
    category_id: `Grooming Products`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Skout's Honor® Pet Supply Company Cat Probiotic Honeysuckle Shampoo + Conditioner`,
    description: `Skout's Honor Pet Supply Company Cat Probiotic Honeysuckle Shampoo + Conditioner gently cleans and hydrates the skin and coat, leaving fur silky and smooth. It provides a premium grooming experience without disturbing the skin's natural microbial community. Great for healthy pets and pets who suffer from skin allergies, it is designed to support your cat's natural defenses against itching, dryness, irritation & odor. We love pets and their people. At Skout's Honor we change what people expect from a pet product by providing innovative solutions to everyday problems that dramatically improve the quality of life for pets and their people. Skout's Paw Pledge: Together we provide a day's worth of food to an animal in need, with every product sold (Buy a Bottle, Feed an Animal).`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5351566?fmt=webp&wid=800&hei=800',
      alt: `Skout's Honor® Pet Supply Company Cat Probiotic Honeysuckle Shampoo + Conditioner`,
    },
    price: 21,
    stock: 20,
    category_id: `Grooming Products`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Capstar™ 2-25 Lb Cat Flea Treatment - 6 Count`,
    description: `CAPSTAR (nitenpyram) is a fast-acting cat flea treatment tablet for use with cats that starts killing fleas in only 30 minutes. A single dose of CAPSTAR oral flea treatment kills 90% of adult fleas within 6 hours for cats. Give this oral flea treatment and watch the dead fleas fall off your pet. CAPSTAR flea tablets are available for cats and kittens 2-25 pounds, and 4 weeks of age or older.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5286901?fmt=webp&wid=800&hei=800',
      alt: `Capstar™ 2-25 Lb Cat Flea Treatment - 6 Count`,
    },
    price: 44,
    stock: 20,
    category_id: `Health & Wellness`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Greenies Feline Pill Pockets Cat Treats - Salmon`,
    description: `Take the stress out of giving your cat their medicine. FELINE GREENIES PILL POCKETS Treats for Cats easily hide most tablets and capsules in a great-tasting treat that's made with natural ingredients plus minerals and trace nutrients. These soft cat treats are the #1 vet recommended choice for giving pills* and feature a delicious salmon flavor that helps disguise the taste of the medicine. It's the hassle-free way to give your cat medicine, just place their medicine inside the pocket, pinch the pocket closed to secure the pill or capsule, and share with your cat. Just like that, the treat (and medicine) disappears. When it comes to taking meds, your cat is smart. But you're smarter, because you've got FELINE GREENIES PILL POCKETS Cat Treats. * Based on a survey of U.S. veterinarians`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5286901?fmt=webp&wid=800&hei=800',
      alt: `Greenies Feline Pill Pockets Cat Treats - Salmon`,
    },
    price: 8,
    stock: 20,
    category_id: `Health & Wellness`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Made By Cleo® Sunflowers Cat Bandana`,
    description: `This adorable pet bandana from Made By Cleo is the perfect "effortlessly cool" accessory for cats and small dogs who'd rather be out adventuring and NOT fussing over their wardrobes. The slide-on / over-the-collar bandana format provides maximum comfort and ease for pets and zero fuss for the owner. No need to figure out how to tie it artfully or worry about it coming loose. Just slide it on the collar and go! Best suited for adult cats and small dogs. Not recommended for pets with neck sizes under 7-inches (i.e. small cats / kitten and miniature dog breeds). Collar not included. The matching cat collar and bow tie are also available for purchase separately. All products handmade in the USA.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5357564?fmt=webp&wid=800&hei=800',
      alt: `Made By Cleo® Sunflowers Cat Bandana`,
    },
    price: 14,
    stock: 20,
    category_id: `Clothing & Accessories`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Rubie's Pet Shop Halloween Kidrobot Yummy World Avocado Headpiece Pet Accessory`,
    description: `Your pet will be looking healthy as ever this year when they're wearing our Kidrobot Yummy World Avocado Pet Headpiece Accessory. With this one, you will receive just the headpiece your pet needs to show the world why avocados are the most delicious and nutritious fruit; yes, they're a fruit! Featuring an adorable green avocado headpiece with a smiling face that your pet will look absolutely darling in, you do not want to miss out on this great avocado wear for your furry friend this year.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5347861?fmt=webp&wid=800&hei=800',
      alt: `Rubie's Pet Shop Halloween Kidrobot Yummy World Avocado Headpiece Pet Accessory`,
    },
    price: 10,
    stock: 20,
    category_id: `Clothing & Accessories`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Catit® Flower Cat Drinking Fountain`,
    description: `The Catit Flower Fountain has a fresh, unique design that allows up to 3 different water flow settings to appeal to picky drinkers! When plugged in without accessories, the Flower Fountain provides a gently flowing water surface. Inserting the flower accessory creates long, faucet-like streams of water. The flower is easy to add to (or remove from) the fountain. Adding the flower cap will tone down the bubbling water on top, so give this setting a try if your cat would rather play with the water than drink from it. The Flower Fountain includes a Triple Action Filter. The ion exchange resin softens tap water. Active Carbon removes odors and impurities, and the cotton mesh retains stray hairs, sediment and debris. The Flower Fountain is easy to disassemble and clean and has an ergonomic whisker stress free design.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5271613?fmt=webp&wid=800&hei=800',
      alt: `Catit® Flower Cat Drinking Fountain`,
    },
    price: 28,
    stock: 20,
    category_id: `Feeding & Watering Supplies`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Whisker City® Terracotta Ceramic Cat Saucer, 1.5-cup`,
    description: `This Whisker City Ceramic Terracotta Cat Saucer makes the perfect liquid receptacle for your cat. This strong and sturdy bowl features a great-looking cat head terracotta design, and features a non-slip bottom to stay in place once on your floor. What a great choice in saucers for your feline friend.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5320396?fmt=webp&wid=800&hei=800',
      alt: `Whisker City® Terracotta Ceramic Cat Saucer, 1.5-cup`,
    },
    price: 8,
    stock: 20,
    category_id: `Feeding & Watering Supplies`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `PetSafe ScatMat Indoor Pet Training Mat`,
    description: `Teach your best friend to be on their best behavior with the PetSafe ScatMat Indoor Pet Training Mat. With this training mat you can quickly and safely teach your cat or dog off limits areas in your home. Place the mat on your kitchen counter, on the sofa, or in front of the Christmas tree to keep curious pets away. The mat uses a battery-operated controller featuring an LCD display. The LCD display shows the battery level, correction level and a counter so you can see how many times your pet steps on the mat. It's easy to adjust the correction level of the training mat depending on your pet's needs. The 7 correction modes allow you to set the correction to tone only, 3 levels of static only or 3 levels of static plus tone. When your pet steps on the mat they will feel a safe yet startling correction. The mat has a safety timeout feature, so if your pet keeps their paws on the mat for more than 8 seconds, the mat will stop correcting your pet before repeating the cycle. The ScatMat training mat is available in 5 different sizes so you can choose the best size for the area in your home you want to protect. With a little time and training, your pet will learn to stay out of trouble. Trust PetSafe to keep your pet healthy, safe and happy.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5362577?fmt=webp&wid=800&hei=800',
      alt: `PetSafe ScatMat Indoor Pet Training Mat`,
    },
    price: 76.30,
    stock: 20,
    category_id: `Training & Behaviour Aids`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Nature's Miracle® Brand Advanced Platinum Cat Scratch Deterrent Spray`,
    description: `Scratching is an instinctual cat behavior. Nature's Miracle Brand Advanced Platinum Cat Scratch Deterrent Spray is specifically formulated to discourage destructive scratching throughout the home on household surfaces. Repellent scent deters cats from returning to the treated area. Design for indoor use; safe for use on furniture, fabric, and more when used as directed.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5322597?fmt=webp&wid=800&hei=800',
      alt: `Nature's Miracle® Brand Advanced Platinum Cat Scratch Deterrent Spray`,
    },
    price: 76.30,
    stock: 20,
    category_id: `Training & Behaviour Aids`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Whisker City Fish Foil Kitten Harness and Leash Combo Set`,
    description: `This Whisker City Foil Fish Cat Harness and Leash Combo Set is the perfect choice for enjoying outdoor excursions with your feline friend. This combo set features a harness that is adjustable for a comfortable yet secure fit, as well as a leash that attaches to the harness for fun and relaxed walks with your cat.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5353776?fmt=webp&wid=800&hei=800',
      alt: `Whisker City Fish Foil Kitten Harness and Leash Combo Set`,
    },
    price: 20,
    stock: 20,
    category_id: `Travel & Outdoor Gear`,
    petType_id: [`Cats`],
    discount: 0
  },
  {
    name: `Top Paw Travel Airline Carrier`,
    description: `Let your dog travel in safe and comfortable fashion in this Top Paw Travel Airline Carrier. This carrier provides a spacious and stable travel environment for your furry friend, and is easy to carry so that the two of you can enjoy road trips together in style.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5309403?fmt=webp&wid=800&hei=800',
      alt: `Top Paw Travel Airline Carrier`,
    },
    price: 43,
    stock: 20,
    category_id: `Travel & Outdoor Gear`,
    petType_id: [`Cats`, `Dogs`],
    discount: 0
  },
  {
    name: `PetSafe® 5 Meal Pet Food Dispenser - Dry or Semi-Moist Pet Food`,
    description: `The PetSafe 5-Meal Automatic Feeder makes sure your pet is fed even when you aren't home to do it. This handy feeder accommodates your busy schedule by allowing you to fill up 5 one portion sections and set a timer for when you would like your pet fed. What a great worry-free way to make certain your pet is always fed on time. Great for portion control and establishing eating routines.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5115264?fmt=webp&wid=800&hei=800',
      alt: `PetSafe® 5 Meal Pet Food Dispenser - Dry or Semi-Moist Pet Food`,
    },
    price: 55,
    stock: 20,
    category_id: `Pet Tech`,
    petType_id: [`Cats`, `Dogs`],
    discount: 0
  },
  {
    name: `YIP Smart Tag Personalized ID Tag and Finder - Works with Apple Find My`,
    description: `The YIP Smart Tag is an engravable I.D. Tag that helps you locate the most precious things in your life. Your tag communicates with hundreds of millions of Apple devices on the Apple Find My network. In just a few easy steps, you can add your YIP Smart Tag to the Apple Find My app on your iPhone or iPad. During those stressful moments, go to the Find My app and see on the map where your smart tag is or put it in Lost Mode and your iPhone will notify you when your smart tag comes in contact with another Apple device.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5334885?fmt=webp&wid=800&hei=800',
      alt: `YIP Smart Tag Personalized ID Tag and Finder - Works with Apple Find My`,
    },
    price: 35,
    stock: 20,
    category_id: `Pet Tech`,
    petType_id: [`Cats`, `Dogs`],
    discount: 0
  },
  {
    name: `Top Fin® Custom Colorflow™ Aquarium with 7 Color-Changing LEDs`,
    description: `Provide a beautiful and colorful world for your fish to live in and a beautiful centerpiece for any room with the Top Fin Custom Colorflow Aquarium Starter Kit with 7 Color-Changing LEDs. This aquarium kit features 7 color-changing LED lights for a variety of stunning looks. Pick a color that suits your mood, and watch your tank transform into a brilliant light display with the touch of a button. It also comes with Top Fin Hydrochange Technology, which is built into the filter and makes changing water easy for the continued good health of your fish.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5295564?fmt=webp&wid=1400&hei=1400',
      alt: `Top Fin® Custom Colorflow™ Aquarium with 7 Color-Changing LEDs`,
    },
    price: 35,
    stock: 20,
    category_id: `Bedding & Furniture`,
    petType_id: [`Fish`],
    discount: 0
  },
  {
    name: `Tetra® TetraMin Tropical Flakes Fish Food`,
    description: `Tetra TetraMin Tropical Flakes are a nutritionally-balanced, complete diet for optimal health in top- and mid-feeding aquarium fish. These crisps leave up to 35 percent less waste behind than competing flakes for more usable food, clearer water and healthy fish. The uniform size of each crisp provides consistency in feeding. TetraMin Tropical Flakes contain the Tetra Active Life Formula, with antioxidants for healthy cells, select proteins for growth and prebiotics for digestion. Active Life Formula helps nutritionally support fish's immune system for optimal health and long life. This food will not cloud water when used as directed.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/1031024?fmt=webp&wid=1400&hei=1400',
      alt: `Tetra® TetraMin Tropical Flakes Fish Food`,
    },
    price: 13.50,
    stock: 20,
    category_id: `Food`,
    petType_id: [`Fish`],
    discount: 0
  },
  {
    name: `Fluval® Bug Bites Color Enhancing Flakes`,
    description: `Fluval Bug Bites Color Enhancing Flakes are specifically formulated to address the natural, insect-based feeding habits of fish, with added vitamins, minerals and other trace nutrients important to their health and vitality. Suitable as a complement to all Bug Bites formulas or as a daily diet on its own`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5300334?fmt=webp&wid=1400&hei=1400',
      alt: `Fluval® Bug Bites Color Enhancing Flakes`,
    },
    price: 10,
    stock: 20,
    category_id: `Treats`,
    petType_id: [`Fish`],
    discount: 0
  },
  {
    name: `Top Fin® Dinosaur Brontosaurus Aquarium Ornament`,
    description: `This Top Fin Dinosaur Brontosaurus Aquarium Ornament brings a fun and colorful look to your aquarium's decor. This piece features a colorful brontosaurus, and comes with a solid base that keeps it in place once set down in your aquarium. What a great addition this piece makes to your underwater world.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5352475?fmt=webp&wid=1400&hei=1400',
      alt: `Top Fin® Dinosaur Brontosaurus Aquarium Ornament`,
    },
    price: 8,
    stock: 20,
    category_id: `Toys`,
    petType_id: [`Fish`],
    discount: 0
  },
  {
    name: `API® E.M. Erythromycin Fish Bacterial Infection Treatment`,
    description: `API E.M. Erythromycin Freshwater Fish Powder helps to fight bacterial disease in fish. These easy-to-use packets are highly effective in addressing bacterial fish infections to keep your pet fish healthy and strong.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5113625?fmt=webp&wid=1400&hei=1400',
      alt: `API® E.M. Erythromycin Fish Bacterial Infection Treatment`,
    },
    price: 17.90,
    stock: 20,
    category_id: `Health & Wellness`,
    petType_id: [`Fish`],
    discount: 0
  },
  {
    name: `Marineland High-Definition LED Ensemble - 125G`,
    description: `The Marineland High-Definition LED Ensemble contains an aquarium, glass canopy, LED lights and stand. The 125-gallon aquarium is fit for freshwater or saltwater fish. It offers high-definition format for maximum viewing area with tank dimensions of 72.5 inches wide by 18.69 inches deep by 22.13 inches high. Hinged for easy access, the three-piece, rectangular clear glass canopy cover allows for equipment (like additional overhead lights) to be added on top, reduces evaporation and keeps jumping fish safely inside. LED lights can be hidden and clipped to the frame. The water-resistant, black Majesty stand consists of a sturdy wood cabinet with hinged doors, enclosed storage to hide supplies and an open top and large back openings for ease of use with sumps. Its dimensions are 74 inches wide by 20.25 inches deep by 28 inches high.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5358858?fmt=webp&wid=1400&hei=1400',
      alt: `Marineland High-Definition LED Ensemble - 125G`,
    },
    price: 1000,
    stock: 20,
    category_id: `Bedding & Furniture`,
    petType_id: [`Fish`],
    discount: 0
  },
  {
    name: `Top Fin® Fin Automatic Fish Feeder`,
    description: `Great for vacations or for everyday use, this Top Fin Automatic Fish Feeder feeds a preset amount of food once or twice a day. This feeder is easy to set up, and eliminates food waste. Designed to dispense finely crushed flake food. Pellet food is not recommended due to its density.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5119522?fmt=webp&wid=1400&hei=1400',
      alt: `Top Fin® Fin Automatic Fish Feeder`,
    },
    price: 30,
    stock: 20,
    category_id: `Feeding & Watering Supplies`,
    petType_id: [`Fish`],
    discount: 0
  },
  {
    name: `Fluval® FX6 Canister Filter`,
    description: `The Fluval FX6 Canister Filter features patented Smart Pump performance-optimizing technology, intricate multi-stage filtration, a built-in powered water change system and basket-in-basket tray design offering greater media capacity. It is the ideal choice for aquariums up to 400 US Gal (1500 L). Smart Pump Technology is critical in evacuating any air that may build up in the system. Once every 12 hours, the filter will pause and allow any trapped air to escape, thereby maintaining maximum filtration efficiency. Just add water and Smart Pump will prime in seconds. The FX6 features a multi-functional Utility Valve drain at its base, making it possible to empty the canister and perform seamless water changes by draining and refilling water directly from it. Convenient lid-mounted hosing clips offers clean storage when not in use - no need to reconnect for subsequent use. The lift-out stack of media baskets is at the heart of Fluval multi-stage filtration. Theselarge capacity baskets enable you to stack filtration media in the precise combination of layers that will work best for your aquarium.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5105630?fmt=webp&wid=1400&hei=1400',
      alt: `Fluval® FX6 Canister Filter`,
    },
    price: 370,
    stock: 20,
    category_id: `Feeding & Watering Supplies`,
    petType_id: [`Fish`],
    discount: 0
  },
  {
    name: `Top Fin® Fine Mesh Fish Net`,
    description: `Please allow us to choose one for you. We cannot guarantee a specific color. This Top Fin Fine Mesh Brine Fish Net is the perfect choice for catching small brine shrimp. This fish net comes with a comfortable handle that makes it easy for you to handle, features a mesh net, and comes in three assorted colors.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5282579?fmt=webp&wid=1400&hei=1400',
      alt: `Top Fin® Fine Mesh Fish Net`,
    },
    price: 2.50,
    stock: 20,
    category_id: `Travel & Outdoor Gear`,
    petType_id: [`Fish`],
    discount: 0
  },
  {
    name: `Fluval® Submersible Heaters`,
    description: `These submersible heaters can be used in fresh or saltwater tanks. They all feature a unique reflective technology that maintains the natural look of your aquarium. Available in a wide variety of sizes to fit most tanks.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5142301?fmt=webp&wid=1400&hei=1400',
      alt: `Fluval® Submersible Heaters`,
    },
    price: 52,
    stock: 20,
    category_id: `Pet Tech`,
    petType_id: [`Fish`],
    discount: 0
  },
  {
    name: `Authority® Everyday Health All Life Stages Dry Dog Food - Chicken & Rice`,
    description: `Provide your dog with a delicious and nutritious meal time choice by serving Authority Everyday Health Chicken & Rice Formula All Life Stages Dog Food. This delicious dry blend supports a healthy immune system, healthy skin and a shiny coat, digestive health, and oral care.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5279202?fmt=webp&wid=800&hei=800',
      alt: `Authority® Everyday Health All Life Stages Dry Dog Food - Chicken & Rice`,
    },
    price: 58,
    stock: 20,
    category_id: `Food`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Authority® Everyday Health Adult Wet Dog Food - 13 Oz.`,
    description: `The Fluval M series submersible glass heaters are quality manufactured in Europe using superior components and construction. These sleek, compact heaters can be trusted for exceptional performance and unsurpassed reliability. Unique only to the Fluval M series is the reflective technology which helps maintain your aquarium's natural look as the heater reflects the colors of the surroundings. For use in fresh and saltwater tanks. Manufacturer offers a 3 year warranty.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5278699?fmt=webp&wid=800&hei=800',
      alt: `Authority® Everyday Health Adult Wet Dog Food - 13 Oz.`,
    },
    price: 2.30,
    stock: 20,
    category_id: `Food`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Wiggles & Wags Bacon & Cheese Meaty Sticks Dog Treats 6 OZ`,
    description: `Make treat time extra-satisfying for your furry friend by serving Wiggles & Wags Bacon & Cheese Meaty Sticks Dog Treats. These tasty treats feature a soft and chewy texture that is dog approved, and offer the great flavor combination of bacon and cheese that will keep them coming back for more. Pure tail-wagging joy. One tasty treat at a time.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5349460?fmt=webp&wid=800&hei=800',
      alt: `Wiggles & Wags Bacon & Cheese Meaty Sticks Dog Treats 6 OZ`,
    },
    price: 7,
    stock: 20,
    category_id: `Treats`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Merry & Bright Knotted Rawhide Bone 22 Inch 19 OZ`,
    description: `This Merry & Bright Knotted Rawhide Bone makes the perfect Christmas gift for your furry friend. This large knotted rawhide bone features delicious beef flavor, and promises hours and hours of chewing fun.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5355440?fmt=webp&wid=800&hei=800',
      alt: `Merry & Bright Knotted Rawhide Bone 22 Inch 19 OZ`,
    },
    price: 13,
    stock: 20,
    category_id: `Treats`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Joyhound Game On 6-Knot Rope Dog Toy`,
    description: `Our Joyhound 6 Knot Rope Dog Toy provides hours of interactive fun for you and your dog. This durable and colorful tug of war toy is virtually indestructible, made from knotted rope and designed for healthy tugging, fetching, playing, and healthy chewing for aggressive chewers and teething pups. The Tug Rope Dog Toy allows you to engage your dog in a motivational activity that supports your dog's natural instincts to tug, fetch, and chew. New from Joyhound.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5313782?fmt=webp&wid=800&hei=800',
      alt: `Joyhound Game On 6-Knot Rope Dog Toy`,
    },
    price: 16,
    stock: 20,
    category_id: `Toys`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Joyhound Bite Shield™ Protection Plush Octopus Dog Toy - Squeaker, Crinkle`,
    description: `Our Biteshield Plush Octopus Dog Toy is a plush toy that provides companionship and comfort for small, medium, and large dogs. This soft, sweet, squeaky behavioral aid is great for cuddling and helps provide relief from anxiety, boredom, and loneliness. The super cute toy design is stuffed with an internal squeaker to provide hours of interactivity to comfort and entertain, and it makes crinkling sounds as well. The plush toy exterior provides a gentle surface for soothing and sleep. Finally, it offers Biteshield Protection to stand up to shredders and go-getters. This is one versatile comfort toy your dog will love getting close to.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5331848?fmt=webp&wid=800&hei=800',
      alt: `Joyhound Bite Shield™ Protection Plush Octopus Dog Toy - Squeaker, Crinkle`,
    },
    price: 20,
    stock: 20,
    category_id: `Toys`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Top Paw® Orthopedic Cuddler Striped Dog Bed`,
    description: `Your dog will find the optimal comfort he deserves on this Top Paw Grey Striped Orthopedic Cuddler Dog Bed. This great-looking dog bed features a removable pillow, and is soft and plush for true relaxation when your dog lays his head down to rest.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5310223?fmt=webp&wid=800&hei=800',
      alt: `Top Paw® Orthopedic Cuddler Striped Dog Bed`,
    },
    price: 80,
    stock: 20,
    category_id: `Bedding & Furniture`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `KONG® Durable Crate Dog Mat`,
    description: `This KONG Durable Crate Mat makes the time your pup spends in his crate ultra-comfortable and relaxing. This water repellent mat was built to last, and provides a place for your furry friend to find true rest and relaxation during crate time.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5327932?fmt=webp&wid=800&hei=800',
      alt: `KONG® Durable Crate Dog Mat`,
    },
    price: 70,
    stock: 20,
    category_id: `Bedding & Furniture`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Top Paw® Nail Grinder with LED Light`,
    description: `Keeping your dog's nails neatly trimmed is easy with the help of this Top Paw Nail Grinder with LED Light. This grinder features a quiet motor as well as rechargeable LED lights that last up to 10 hours. Regular maintenance of nails helps prevent health issues like arthritis, which can be caused by the constant pressure that overgrown nails put on the dog's knuckles when they walk.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5351596?fmt=webp&wid=800&hei=800',
      alt: `Top Paw® Nail Grinder with LED Light`,
    },
    price: 40,
    stock: 20,
    category_id: `Grooming Products`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `CHI® for Dogs Oatmeal Shampoo`,
    description: `CHI for Dogs Oatmeal Shampoo is great for your dog's coat and his skin. This shampoo is made with oatmeal, and serves to cleanse and moisturize dry skin while making the coat softer and shinier. Help your dog to rehydrate his skin, pamper his coat, and look his best.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5231649?fmt=webp&wid=800&hei=800',
      alt: `CHI® for Dogs Oatmeal Shampoo`,
    },
    price: 17,
    stock: 20,
    category_id: `Grooming Products`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Purina® Pro Plan® Veterinary Supplements FortiFlora-Probiotic Powder Supplement for Dogs - 30 Count`,
    description: `Provide specialized support for your dog by introducing Purina Pro Plan Veterinary Diets FortiFlora Probiotic for Dogs Powder Supplement to their diet. This FortiFlora Purina probiotics for dogs contains a strain proven to promote intestinal health and balance. Formulated for the dietary management of dogs with diarrhea, this safe and effective probiotic digestive support dog food supplement powder is simple to administer by adding it to your dog's regular food. Each packet of these digestive dog food supplements contains a guaranteed level of live microorganisms that help promote beneficial intestinal microflora. A proprietary microencapsulation process helps enhance the stability and survival of the probiotics until they reach your dog's intestinal tract. This probiotic supplement contains antioxidants and also offers immune support for dogs. These gentle digestive probiotic for dogs also helps reduce gas in dogs. FortiFlora probiotics for dogs are appropriate for administration to both puppies and adult dogs.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5231649?fmt=webp&wid=800&hei=800',
      alt: `Purina® Pro Plan® Veterinary Supplements FortiFlora-Probiotic Powder Supplement for Dogs - 30 Count`,
    },
    price: 34,
    stock: 20,
    category_id: `Health & Wellness`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Skout's Honor® Probiotic Ear Cleaner`,
    description: `Skout's Honor Probiotic Ear Cleaner restores harmony and helps stabilize the ear's natural microbiome for a happier, healthier-looking pet. It contains live topical probiotics to support the ear's natural defenses. Gently cleans, soothes and protects dirty, itchy & irritated ears. At Skout's Honor, our goal is simple: curate the best technologies and create products that greatly improve the experience of living with and loving our pets. Skout's Paw Pledge: Together we provide a day's worth of food to an animal in need with every purchase (Buy a Bottle, Feed an Animal). We are environmentally and socially conscious. Our products exceed the highest level of environmental responsibility and safety standards and perform above and beyond anything else in their category.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5346107?fmt=webp&wid=800&hei=800',
      alt: `Skout's Honor® Probiotic Ear Cleaner`,
    },
    price: 10,
    stock: 20,
    category_id: `Health & Wellness`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Puppia® Mountaineer II Dog Harness Coat`,
    description: `The Puppia Mountaineer II is a Winter fleece vest with integrated harness jumper/jacket that will surely keep your furry friend warm through the cold season. It features a Backside zipper closure and fits like a vest (the collar portion), with an added Puppia Sports rubber label for looks.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5318764?fmt=webp&wid=800&hei=800',
      alt: `Puppia® Mountaineer II Dog Harness Coat`,
    },
    price: 74,
    stock: 20,
    category_id: `Clothing & Accessories`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Arcadia Trail™ Year-Round All-Terrain Dog Boots`,
    description: `A good pair of shoes is essential for any outdoor adventure, and that rule applies to your dog as well. Arcadia Trail Year-Round All-Terrain Boots are the dog boot of choice for those who enjoy outdoor adventures with their dogs because they combine comfort and safety. These high ankle boots are adjustable for an optimal fit, with a traction grip that offers superior traction from the first step to the end of an adventure. They offer added safety as well, as reflective stitching makes them visible at night.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5312766?fmt=webp&wid=800&hei=800',
      alt: `Arcadia Trail™ Year-Round All-Terrain Dog Boots`,
    },
    price: 30,
    stock: 20,
    category_id: `Clothing & Accessories`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Top Paw® Black Silicone Double Dog Bowl with Mat, 1.75-cup`,
    description: `Give your dog easy access to food or water, and keep spilled food and water off of your floor, with this Top Paw Black Silicone Double Dog Bowl with Mat. This fun bone-shaped mat features two bowl holders to keep the two included bowls firmly in place. If food or water does, spill, the silicone mat's raised edges will keep them off of your floor.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5302394?fmt=webp&wid=800&hei=800',
      alt: `Top Paw® Black Silicone Double Dog Bowl with Mat, 1.75-cup`,
    },
    price: 20,
    stock: 20,
    category_id: `Feeding & Watering Supplies`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Vittles Vault® Elevated Pet Feeder Plus Pet Food Storage`,
    description: `Give your dog the best mealtime experience with Vittles Vault's Elevated Storage Feeder. Convenience meets freshness with this 2-in-1 solution for elevated feeding and fresh food storage. Measuring 14.5 inches in height, the Vittles Vault Elevated Storage Feeder is perfect for medium to large sized dogs, and provides a healthier bowl option as elevated feeders eliminate joint and back pain and prevents gastrointestinal problems. Hidden under the stainless-steel bowls is a 50-lb. capacity storage compartment that uses Gamma Seal Technology to keep your dog's food fresher, longer. Developed with freshness in mind, Gamma Seal Technology keeps food fresh with our threaded locking system and reliable double gaskets that create a state called "Controlled Moisture Balance" inside the storage compartment every time you close the lid. In this state, good moisture is locked in while harmful moisture is locked out, protecting your dog food investment and keeping every last piece of kibble fresh.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5322744?fmt=webp&wid=800&hei=800',
      alt: `Vittles Vault® Elevated Pet Feeder Plus Pet Food Storage`,
    },
    price: 70,
    stock: 20,
    category_id: `Feeding & Watering Supplies`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Bil-Jac® Little-Jacs Training Dog Treat`,
    description: `Bil-Jac Little-Jacs Training Treats are ideal for training your small dog. The small size is perfect for treating any time, and your dog will love the delicious taste of chicken liver in every bite. Reward your dog with love, affection and Bil-Jac Treats.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5204187?fmt=webp&wid=800&hei=800',
      alt: `Bil-Jac® Little-Jacs Training Dog Treat`,
    },
    price: 13,
    stock: 20,
    category_id: `Training & Behaviour Aids`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Great Choice® X-Large Dog Pads - 28"L x 30"W`,
    description: `Count on Grreat Choice Dog Pads to control odors and give your pup a leak proof place to relieve himself indoors. These extra-large pads absorb up to three cups of urine and effectively control odors, keeping your home accident and odor free.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5270624?fmt=webp&wid=800&hei=800',
      alt: `Great Choice® X-Large Dog Pads - 28"L x 30"W`,
    },
    price: 45,
    stock: 20,
    category_id: `Training & Behaviour Aids`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `KONG® Reflective Waste Bag Dog Harness`,
    description: `The KONG Waste Bag Dog Harness is our strongest yet. In addition to providing control while the two of you are out on walks together, this harness comes with a waste dispenser and is great for active dogs. Make this ultra-durable harness your choice when enjoying the outdoors with your pup.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5323696?fmt=webp&wid=800&hei=800',
      alt: `KONG® Reflective Waste Bag Dog Harness`,
    },
    price: 35,
    stock: 20,
    category_id: `Travel & Outdoor Gear`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `flexi® Xtreme Tape Dog Leash: 16-ft long`,
    description: `Keep your dog safe on walks while giving him a bit of room to roam with the Flexi Xtreme Tape Dog Leash. Equipped with an extremely robust tape as well strong and sturdy braking system, the leash also offers you more control on walks, making outdoor excursions with your furry friend safer and more enjoyable for the two of you.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5335878?fmt=webp&wid=800&hei=800',
      alt: `flexi® Xtreme Tape Dog Leash: 16-ft long`,
    },
    price: 45,
    stock: 20,
    category_id: `Travel & Outdoor Gear`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `PETLIBRO Granary Automatic Pet Feeder`,
    description: `The Petlibro Granary Automatic Pet Feeder simplifies pet feeding with automatic, timed feeding and customizable portion control. Its large capacity, efficient dispensing, and easy-to-use controls make it ideal for busy pet owners. This feeder aligns with Petlibro's mission to enhance pet care by offering a reliable and convenient solution for consistent, high-quality feeding.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5362259?fmt=webp&wid=800&hei=800',
      alt: `PETLIBRO Granary Automatic Pet Feeder`,
    },
    price: 45,
    stock: 20,
    category_id: `Pet Tech`,
    petType_id: [`Dogs`],
    discount: 0
  },
  {
    name: `Instachew PureSight 360 HD Smart Camera`,
    description: `Instachew Purrsight 360 Degree HD pet camera has a 1080P Wi-Fi pet camera with a wide-angle view that delivers optimum security to your pets and to your home. You can ensure your pet's safety with the night vision and motion detectors in this indoor home security surveillance camera. Connect your camera to the Instachew Infinity app and control it from anywhere using the phone app-enabled monitoring system, so you don't have to worry about your pet's safety when you leave home. It doesn't matter whether you are travelling for a short or long time; the pet camera lets you keep an eye on them from anywhere. The full rotation feature, which pans 355 degrees and Tilts 110 degrees, maximizes the real-time recording efficiency and security grade to get the best results. The 2-way audio, with input and output, and the flexible recording capabilities, allow you always to stay connected to your home. It is easy to use the camera in the same room as your friend and control it with your smartphone using the Instachew Infinity app.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5324202?fmt=webp&wid=800&hei=800',
      alt: `Instachew PureSight 360 HD Smart Camera`,
    },
    price: 35,
    stock: 20,
    category_id: `Pet Tech`,
    petType_id: [`Dogs`, `Cats`, `Birds`, `Rodents`, `Reptiles`, `Fish`],
    discount: 0
  },
  {
    name: `ZuPreem® FruitBlend Medium Bird Food`,
    description: `Healthy And Delicious Nutrition For Everyday Feeding`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5146788?fmt=webp&wid=1400&hei=1400',
      alt: `ZuPreem® FruitBlend Medium Bird Food`,
    },
    price: 17,
    stock: 20,
    category_id: `Food`,
    petType_id: [`Birds`],
    discount: 0
  },
  {
    name: `All Living Things® Spray Millet Bird Treat`,
    description: `Treat your bird to All Living Things Spray Millet. Spray Millet is commonly known as foxtail or finger millet. It is left on the stalk and is often used as a treat for birds as part of a balanced diet. Spray millet can help encourage foraging because birds have to harvest their own seed from the millet's grain heads. This activity can help reduce boredom while providing your bird a healthy snack.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5290113?fmt=webp&wid=1400&hei=1400',
      alt: `All Living Things® Spray Millet Bird Treat`,
    },
    price: 11,
    stock: 20,
    category_id: `Treats`,
    petType_id: [`Birds`],
    discount: 0
  },
  {
    name: `All Living Things® Wooden Wind Chime Bird Toy`,
    description: `Keep your feathered friend active and engaged in a way that satisfies his natural instincts with the All Living Things Bird Wooden Wind Chime Toy. This fun toy offers constant movement and motion to keep your bird entertained while promoting healthy exercise.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5268942?fmt=webp&wid=1400&hei=1400',
      alt: `All Living Things® Wooden Wind Chime Bird Toy`,
    },
    price: 5,
    stock: 20,
    category_id: `Toys`,
    petType_id: [`Birds`],
    discount: 0
  },
  {
    name: `All Living Things® Hanging Nest Bird Hut`,
    description: `Your bird will love the time it spends in this All Living Things Hanging Nest Bird Hut. This hut hangs easily from your bird's habitat, and provides a place for your feathered friend to find rest and/or enjoy play.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5350847?fmt=webp&wid=1400&hei=1400',
      alt: `All Living Things® Hanging Nest Bird Hut`,
    },
    price: 16,
    stock: 20,
    category_id: `Bedding & Furniture`,
    petType_id: [`Birds`],
    discount: 0
  },
  {
    name: `QUICKO Multivitamin Bird Supplement`,
    description: `Quiko Daily Multivitamin is the ideal all-purpose daily supplement for birds of all sizes. With 20 essential vitamins and minerals, this multivitamin keeps your pet bird healthy and strong, especially during times of growth or stress. This water soluble supplement powder is easy to add to parakeet food, parrot food, cockatiel food, budgie food, macaw food, conure food, finch food, and more. Mix with egg food for a nutritious treat that goes down easy.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5351673?fmt=webp&wid=1400&hei=1400',
      alt: `QUICKO Multivitamin Bird Supplement`,
    },
    price: 7.20,
    stock: 20,
    category_id: `Health & Wellness`,
    petType_id: [`Birds`],
    discount: 0
  },
  {
    name: `KAYTEE® Nut & Fruit Blend Wild Bird Food`,
    description: `Kaytee Nut & Fruit Blend Wild Bird Food is an excellent high energy food. This food is a perfect choice for year-round feeding.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5193787?fmt=webp&wid=1400&hei=1400',
      alt: `KAYTEE® Nut & Fruit Blend Wild Bird Food`,
    },
    price: 25,
    stock: 20,
    category_id: `Feeding & Watering Supplies`,
    petType_id: [`Birds`],
    discount: 0
  },
  {
    name: `All Living Things Fuzzy Bird Hut`,
    description: `The All Living Things Fuzzy Bird Hut provides a place to relax that your bird will love. Soft and fuzzy, this hut allows your bird to hide when it needs solitude, as well as to play or sleep. In short, it adds privacy and comfort to your feathered friend's world.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5350659?fmt=webp&wid=1400&hei=1400',
      alt: `All Living Things Fuzzy Bird Hut`,
    },
    price: 17,
    stock: 20,
    category_id: `Pet Tech`,
    petType_id: [`Birds`],
    discount: 0
  },
  {
    name: `Prevue Pet Products Playtop Bird Travel Carrier`,
    description: `Prevue Pet Products Playtop Bird Travel Carrier is ideal for short term use, traveling or emergency situations. Powder coated cage is sturdy and lighter than other travel cages on the market. With plenty of interior space for your bird to feel content while remaining secure, this travel cage includes one foot-friendly shapeable rope perch for inside the cage plus a wooden perch play top. Solid cup doors prevent spilling while the lock-in-place cups will not be dislodged by your bird. Removable tray is held in place by a wind-bell grille tray lock so it will not slide out during travel but pulls out easily for convenient cleaning. Innovative welded bracket seat belt collars allow you to buckle the carrier into your car for safe and secure automotive travel. Bird proof door lock prevents your small, medium or large sized bird from escaping. Expertly engineered for easy assembly, no additional tools required. All Prevue cages and carriers undergo independent labtesting to conform to the highest levels of pet safety. Prevue Pet Products Bird Travel Carrier measures 18 3/4 in Long, 14 7/8 in Wide, 18 in High with 1/2 in wire spacing. Height to the top of play top perch/handle is 25 in`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5347987?fmt=webp&wid=800&hei=800',
      alt: `Prevue Pet Products Playtop Bird Travel Carrier`,
    },
    price: 120,
    stock: 20,
    category_id: `Travel & Outdoor Gear`,
    petType_id: [`Birds`],
    discount: 0
  },
  {
    name: `Live Waxworms`,
    description: `Keep your reptile fed and happy with these PetSmart Waxworms. Waxworms are medium white caterpillars with black-tipped feet and small, black or brown heads. High in fat content, they are a perfect nutritional choice for reptiles, and are a convenient food choice for your pet.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/4034745?fmt=webp&wid=1400&hei=1400',
      alt: `Live Waxworms`,
    },
    price: 5.50,
    stock: 20,
    category_id: `Food`,
    petType_id: [`Reptiles`],
    discount: 0
  },
  {
    name: `Live Giant Mealworms - 35 Count Cup`,
    description: `Keep your reptile fed and happy with these PetSmart Giant Mealworms. Mealworms make a great food choice for reptiles including bearded dragons, leopard geckos, chameleons and more. Easy to feed, these mealworms are a great source of protein for your pet.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/4033234?fmt=webp&wid=1400&hei=1400',
      alt: `Live Giant Mealworms - 35 Count Cup`,
    },
    price: 3.70,
    stock: 20,
    category_id: `Food`,
    petType_id: [`Reptiles`],
    discount: 0
  },
  {
    name: `Thrive Lightweight Eco-Flex Composite Reptile Terrarium - 46"`,
    description: `This Thrive Lightweight Composite Terrarium is lightweight moisture-resistant, and easy to clean. Tis terrarium is made from recycled polymers and wood by-products, so it is easier on the environment too. Its features include a screen lid with a feeding door, slatted side panels for ventilation, convenient sliding door access, and more. Your reptile is one of a kind, and with Thrive products, so is the world you create for it. With our wide range of unique features and accessories, your creativity has no boundaries. The further you go, the richer your reptile's world becomes.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5312233?fmt=webp&wid=1400&hei=1400',
      alt: `Thrive Lightweight Eco-Flex Composite Reptile Terrarium - 46"`,
    },
    price: 187.50,
    stock: 20,
    category_id: `Bedding & Furniture`,
    petType_id: [`Reptiles`],
    discount: 0
  },
  {
    name: `Thrive Vertical Hexagon Tropical Reptile Terrarium -20 Gallon`,
    description: `Provide your pet reptile with a place to climb in this Thrive Tropical Hexagon Reptile Terrarium. The vertical design of this hexagon-shaped 20 gallon reptile habitat encourages natural climbing behaviors that ultimately help reptiles move closer to UVB light. UVB rays are essential for calcium absorption and bone health. Provide an optimal living environment for your pet with this hexagon reptile enclosure from Thrive.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5290981?fmt=webp&wid=1400&hei=1400',
      alt: `Thrive Vertical Hexagon Tropical Reptile Terrarium -20 Gallon`,
    },
    price: 86.25,
    stock: 20,
    category_id: `Bedding & Furniture`,
    petType_id: [`Reptiles`],
    discount: 0
  },
  {
    name: `Zoo Med Repti Calcium Reptile Supplement`,
    description: `Zoo Med Repti Calcium with D3 Reptile Supplement is a phosphorus-free calcium supplement for reptiles and amphibians. ZooMed only uses precipitated calcium carbonate which is white in color and is essentially lead free. Pure calcium carbonate is white, not gray.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5176902?fmt=webp&wid=1400&hei=1400',
      alt: `Zoo Med Repti Calcium Reptile Supplement`,
    },
    price: 2.40,
    stock: 20,
    category_id: `Health & Wellness`,
    petType_id: [`Reptiles`],
    discount: 0
  },
  {
    name: `Zoo Med Terra Terrium & Aquarium Water Pump`,
    description: `The Zoo MedTerra Pump is a highly effective, easy-to-use and secure pump for your aquarium. This pump moves easily around aquariums, features a power switch for precise flow, and offers a number of other features that make it a a great choice in water pumps.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5340623?fmt=webp&wid=1400&hei=1400',
      alt: `Zoo Med Terra Terrium & Aquarium Water Pump`,
    },
    price: 24.70,
    stock: 20,
    category_id: `Feeding & Watering Supplies`,
    petType_id: [`Reptiles`],
    discount: 0
  },
  {
    name: `Tetra® ReptoFilter Aquarium Filter`,
    description: `TetraFauna ReptoFilter Filter Cartridge refills work effectively to keep water crystal clear and remove odors from terrarium water. These disposable filter cartridges are tough on debris - Ultra-Activate carbon absorbs odors and discoloration, and dense, dual-sided mesh catches debris and waste. They're convenient, fully assembled and ready to use. Use these medium-sized filters with TetraFauna ReptoFilter 20 gallon, Viquarium and Decorative ReptoFilter.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5096762?fmt=webp&wid=1400&hei=1400',
      alt: `Tetra® ReptoFilter Aquarium Filter`,
    },
    price: 24.70,
    stock: 20,
    category_id: `Feeding & Watering Supplies`,
    petType_id: [`Reptiles`],
    discount: 0
  },
  {
    name: `Oxbow Essentials Adult Guinea Pig Food`,
    description: `Essentials Adult Guinea Pig is made with premium, purposeful ingredients to support your pet's healthy, active lifestyle. We start with high fiber Oxbow Western Timothy hay for healthy digestion and add stabilized Vitamin C and prebiotics to help support whole body health. Essentials Adult Guinea Pig provides 100% of your pet's daily recommended vitamins and minerals with no artificial preservatives, colors or flavors.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5202825?fmt=webp&wid=800&hei=800',
      alt: `Oxbow Essentials Adult Guinea Pig Food`,
    },
    price: 23,
    stock: 20,
    category_id: `Food`,
    petType_id: [`Rodents`],
    discount: 0
  },
  {
    name: `Oxbow Simple Rewards Baked Small Pet Treats - Apple & Banana`,
    description: `Sweet and wholesome and blended to perfection, Oxbow Simple Rewards Baked Treats with Apple & Banana combine the irresistible flavors of real apple and banana with wholesome, high fiber Timothy hay to create a delicious treat rabbits, guinea pigs, chinchillas and other small pets love. Feed Oxbow treats to add variety and enrichment to your pet's diet.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5257992?fmt=webp&wid=800&hei=800',
      alt: `Oxbow Simple Rewards Baked Small Pet Treats - Apple & Banana`,
    },
    price: 7,
    stock: 20,
    category_id: `Treats`,
    petType_id: [`Rodents`],
    discount: 0
  },
  {
    name: `Full Cheeks™ Small Pet Timothy Hay Hoop Rabbit Chew`,
    description: `Satisfy your small pet's natural instinct to chew with this Full Cheeks Timothy Hay Hoops Chew. This chew was made with love for rabbits, is made of delicious Timothy Hay, and allows your small pet great satisfaction as he or she happily chews the day away. We believe caring for your furry little one should be as easy as loving them, and now it can be. Our products are specially made for them, and are designed to be simple for you. All they need to do is what they do best: give lots of love.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5318536?fmt=webp&wid=800&hei=800',
      alt: `Full Cheeks™ Small Pet Timothy Hay Hoop Rabbit Chew`,
    },
    price: 5,
    stock: 20,
    category_id: `Toys`,
    petType_id: [`Rodents`],
    discount: 0
  },
  {
    name: `Tiny Tales™ Castle Connectable Hamster Home`,
    description: `Provide your small pet with a touch of a royal lifestyle with this All Living Things Tiny Tales Castle Connectable Hamster Home. This fun home is shaped like a castle, and features a number of cool amenities including multiple transport tubes, an exercise wheel and more.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5282318?fmt=webp&wid=800&hei=800',
      alt: `Tiny Tales™ Castle Connectable Hamster Home`,
    },
    price: 55,
    stock: 20,
    category_id: `Bedding & Furniture`,
    petType_id: [`Rodents`],
    discount: 0
  },
  {
    name: `Science Selective Bathing Sand`,
    description: `Science Selective Bathing Sand is especially kind to the skin and paws. The sand particles are all a very similar size, meaning it feels beautifully soft and is even suitable for pets with very sensitive skin. It is ideal for keeping little furry coats clean, healthy, shiny and in tip-top condition. Chinchillas love to bathe in this special sand every day, whilst hamsters, gerbils and degus will enjoy it two or three times a week. Have you tried our award-winning food and treats range? Science Selective offers tailored nutrition to help support your petâs digestive health and vitality for all life stages and lifestyles.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5327960?fmt=webp&wid=800&hei=800',
      alt: `Science Selective Bathing Sand`,
    },
    price: 12,
    stock: 20,
    category_id: `Grooming Products`,
    petType_id: [`Rodents`],
    discount: 0
  },
  {
    name: `Oxbow Critical Care - Herbivore`,
    description: `Developed with the assistance of top exotic veterinarians and nutritionists, Critical Care is the industry standard in recovery nutrition for herbivores with poor nutritional status resulting from illness or surgery.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5359656?fmt=webp&wid=800&hei=800',
      alt: `Oxbow Critical Care - Herbivore`,
    },
    price: 13.80,
    stock: 20,
    category_id: `Health & Wellness`,
    petType_id: [`Rodents`],
    discount: 0
  },
  {
    name: `Merry & Bright Small Pet Ugly Sweater`,
    description: `Let your small pet join in on all of your holiday fun with this Merry & Bright Ugly Sweater Costume for small pets. This costume features adjustable Velcro straps for a comfortable fit, and comes with a fun ugly sweater design that brings a great holiday feel.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5358793?fmt=webp&wid=800&hei=800',
      alt: `Merry & Bright Small Pet Ugly Sweater`,
    },
    price: 8,
    stock: 20,
    category_id: `Clothing & Accessories`,
    petType_id: [`Rodents`],
    discount: 0
  },
  {
    name: `Full Cheeks™ Small Pet 3 in 1 Space Saver Food & Water Dispenser`,
    description: `This Full Cheeks 3-in-1 Space Saver Food & Water Dispenser makes both food and water readily available for your guinea pig, chinchilla, hamster, or gerbil in one great place. This dispenser is so unique that it even features a bult-in hideout for your pet. We believe caring for your furry little one should be as easy as loving them. And now it can be. Our products are specially made for them and designed to be simple for you. Now all they need to do is what they do best: Give lots of love.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5319064?fmt=webp&wid=800&hei=800',
      alt: `Full Cheeks™ Small Pet 3 in 1 Space Saver Food & Water Dispenser`,
    },
    price: 13,
    stock: 20,
    category_id: `Feeding & Watering Supplies`,
    petType_id: [`Rodents`],
    discount: 0
  },
  {
    name: `Full Cheeks™ Exercise Wheel`,
    description: `Provide your small pet with the exercise he or she needs with this Full Cheeks Exercise Wheel. This exercise wheel can stand alone or attach easily to a habitat, and spins silently as your pet exercises. We believe caring for your furry little one should be as easy as loving them, and now it can be. Now all they need to do is what they do best: give lots of love.`,
    image: {
      url: 'https://s7d2.scene7.com/is/image/PetSmart/5353419?fmt=webp&wid=800&hei=800',
      alt: `Full Cheeks™ Exercise Wheel`,
    },
    price: 13,
    stock: 20,
    category_id: `Travel & Outdoor Gear`,
    petType_id: [`Rodents`],
    discount: 0
  },
]
const initialCarts = [
  {
    user_id: `0`,
    products: [],
  },
  {
    user_id: `1`,
    products: [
      {
        isStocked: true,
        product_id: `Authority® Everyday Health Cat Wet Food - 66 Oz, Flaked in Gravy, With-Grain`,
        quantity: 1,
        price: 1
      }
    ]
  },
  {
    user_id: `2`,
    products: [
      {
        isStocked: true,
        product_id: `Temptations™ Mixups Cat Treats - Soft & Crunchy, Catnip Fever`,
        quantity: 1,
        price: 1
      },
      {
        isStocked: true,
        product_id: `Hartz Delectables™ Squeeze Up Puree Variety Pack - 20 Pack`,
        quantity: 3,
        price: 1
      },
    ]
  },
]

const initialOrders = [
  {
    user_id: `0`,
    products: [
      {
        product_id: `Authority® Everyday Health Cat Wet Food - 66 Oz, Flaked in Gravy, With-Grain`,
        quantity: 1,
        price: 1
      }
    ],
    address: {},
    status: 'Complete',
    total: 1
  },
  {
    user_id: `1`,
    products: [
      {
        product_id: `Temptations™ Mixups Cat Treats - Soft & Crunchy, Catnip Fever`,
        quantity: 2,
        price: 2
      }
    ],
    address: {},
    status: 'Complete',
    total: 2
  },
  {
    user_id: `2`,
    products: [
      {
        product_id: `Hartz Delectables™ Squeeze Up Puree Variety Pack - 20 Pack`,
        quantity: 1,
        price: 1
      }
    ],
    address: {},
    status: 'Complete',
    total: 1
  }
]

export { initialUsers, initialPets, initialCategories, initialProducts, initialCarts, initialOrders };