PRAGMA foreign_keys = OFF;
BEGIN;

INSERT INTO comics VALUES
('Alien Variant Edition', 1 ,'THE ICONIC CINEMATIC TERROR MAKES ITS MARVEL DEBUT! Gabriel Cruz gave his life to Weyland-Yutani--In the case of an alien attack he barely survived, almost literally! Recently retired, Cruz is trying to patch things up with his abandoned son with the help of his friend, a Bishop-model android, but his re-entry into civilian life is not going smoothly…and his encounters with the deadly Xenomorph are far from over. Phillip Kennedy Johnson and Salvador Larroca team up to tell an all-new tale of the titan of horror and science fiction that has scared audiences for decades. No one is safe. No one is innocent. And no one can hear you scream.' , ./public/images/1.jpg, 9.99, 1, 'May', 2021, 6),
('Batman The Joker Warzone', 1, 'Gotham City is a battleground as The Joker takes over the Wayne fortune and wages a street war against the Dark Knight and his allies! Enter the "war zone" with short stories featuring characters like Cassandra Cain, Stephanie Brown, and Luke Fox and see how they fighting back in a city under siege! Also, the brutal full debut of the mysterious new anti-hero known as Clownhunter!', ./public/images/2.jpg, 0.99, 2, 'November', 2020, 1),
('Morning Glories', 50, 'SPECIAL FIFTH ANNIVERSARY EDITION! Celebrating five years of mind-bending mysteries with a blockbuster Season Two finale! This is our biggest issue yet—(64 pages!) with an ending that will leave EVERYONE talking.' ,./public/images/3.jpg, 2.99, 3, 'July', 2016, 2),
('The Fix', 1, 'A story of the crooked cops, scheming mobsters, and corrupt politicians that run things—and the sex toy that can bring them all down. Oh, and the hero is a drug-sniffing beagle named Pretzels. Bad people do bad things to each other in this frenetic, outrageous, sometimes off-putting new caper!' ,./public/images/4.jpg, 0.99, 3, 'May', 2017, 3),
('4001 A.D.: War Mother', 1, 'Witness the battle-scarred debut of Valiant''s top-secret new hero! As the war for 4001 A.D. rages, the coming of War Mother starts now in all-new standalone adventure torn from the pages of the summer''s biggest comics event!' ,./public/images/5.jpg, 0.99, 4, 'August', 2016, 4),
('Invisible Kingdom', 7,'The Sundog has been captured by pirates, with Grix and the crew at the mercy of its black-hearted captain Turo. When a disabled Lux ship is found stranded in the junk rings, it becomes the Riveters next target . . . and the Sundog is dragged along for the increasingly treacherous ride.' ,./public/images/6.jpg, 0.99, 5, 'November', 2019, 5),
('The Warning', 7, '“ROGUE PLANET” Prin Salu, Archduchess of The Science Guild, and her valet Narrowmeer fold space into The Forbidden Zone. Six months later, Operation: All-Weather devastates The West Coast.',./public/images/7.jpg, 0.99, 3, 'May', 2019, 4),
('Weird Detective', 3, 'Det. Sebastian Greene fights for his life against an Innsmouth monster! And Det. Sana Fayez is hot on Greene''s trail, closer and closer to discovering his secret identity but hounded by fish-faced Mafiosi. Will they be able to survive long enough to stop the Juice Box Killer?',./public/images/8.jpg, 0.99, 6, 'August', 2016, 6),
('Bedlam', 3, 'Ten years after being reformed, Fillmore Press a.k.a. Madder Red is now living on his own and adjusting to life. A new serial killer has popped up, sparking Fillmore’s interest. After one of the latest victims shows up dismembered and tied to a horse outside of his house, Fillmore gives himself up to the police.',./public/images/9.jpg, 0.99, 3, 'January', 2013, 2),
('Batman: Last Knight on Earth', 1, 'Bruce Wayne wakes up in Arkham Asylum. Young. Sane. And...he was never Batman. So begins this sprawling tale of the Dark Knight as he embarks on a quest through a devastated DC landscape featuring a massive cast of familiar faces from the DC Universe. As he tries to piece together the mystery of his past, he must unravel the cause of this terrible future and track down the unspeakable force that destroyed the world as he knew it…',./public/images/10.jpg, 3.99, 7, 'April', 2018, 1)


ON CONFLICT DO NOTHING;

INSERT INTO genres VALUES
(1, 'Superhero'),
(2, 'Mystery'),
(3, 'Crime'),
(4, 'Science Fiction'),
(5, 'Fantasy'),
(6, 'Horror')

ON CONFLICT DO NOTHING;

INSERT INTO publishers VALUES
  (1, 'Marvel Comics'),
  (2, 'DC Comics'),
  (3, 'Image Comics'),
  (4, 'Valiant Comics'),
  (5, 'Berger Books'),
  (6, 'Dark Horse Comics'),
  (7, 'DC Black Label')


ON CONFLICT DO NOTHING;
COMMIT;
PRAGMA foreign_keys = ON;
