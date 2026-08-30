import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

const paragraphs = [
  "hey, i know it's weird n might a lil bit dramatic, but tbh i don't rlly know when we'll see each other again after this. maybe christmas, maybe new year's, or maybe it'll take way longer than either of us expects. i don't even know if i'll be back in jember around those times. soooo yeah, ig that's why i wanted to write this before u leave",
  "anyway, THANK YOU SO MUCHHH. like, really,",
  "thanks for listening to all my stories even tho most of them were literally just walls of text on ur phone especially during those nights when i couldn't sleep, when i was super anxious, terrified over things i couldn't even explain properly, crying like crazy, or when my brain just wouldn't shut up n everything just felt too heavy. dealing with MDD hasn't been easy at all for me, n sometimes it rlly feels like it just slowly taking over my whole life. but somehow, u became the person i trust the most, which is kinda crazy cause idk if i've ever actually told u directly abt this before. but yeah, u did, ur the person i feel safest to talk to whenever my head gets bad, n somehow i never feel like i need to make myself sound less fucked up just so u wouldn't judge me. i could tell u i was scared, couldn't sleep, had been crying, or my brain was doing some horrible shit again, n u never make me feel like i'm being dramatic or “too much.” u just… listened. plus i know “thanks for listening” sounds like such a small thing compared to what i'm trying to say, bcs for me it rlly wasn't. some nights, just knowing that i could text u n tell u whatever was going on inside my head somehow made everything less unbearable",
  "okay eww sorry for the toe-curling, i’m literally starting to feel it too while typing this LMAO",
  "but yeah, pls don't be a stranger. even if we're miles apart, i hope we'll still talk. tell me abt ur random days, funny stories, struggles, yearning, cdramas, or ur ongoing obsession with neo hou lmao. i'll still be here for all the lore. n i hope i can still yap to u too, like if one random night i can't sleep again, get scared over something stupid, or suddenly start overthinking everything again so pls don't disappear on me just bcs ur in china later WKWKKWKW. i'm still counting on u sis",
  "also, if u're wondering why i'm giving u this keychain, long story short, everyone who was supposed to buy this from me ended up backing out. like literally ALL of them 😭 n since i'm also slowly cutting down my pop mart collection, i thought maybe this one should just go to someone who i appreciate and genuinely means a lot. besides, u love MLP, specifically twilight sparkle, u like purple too, n well… she's the main character, like what u said when we were at feli's living room so yeah ig somehow it worked out WKWKWK. also just consider this as ur early birthday present, so don't expect another one tho 😂 nggak nggak MEK GUYON",
  "anyway, good luck with ur china era. go have fun, make memories, don't forget to update me, n hopefully u somehow get to meet neo hou too 🤣 take care of urself n pls don't let ur brain start beefing with u like mine did WWKWKKWK 0/10 ngga enak pol rasa e fr",
];

export const Letter = () => (
  <div className="px-4 max-w-lg mx-auto pb-8 pt-6">
    <GlassCard className="px-7 py-10 sm:px-10 sm:py-14" data-testid="letter-card">
      <div className="space-y-7 text-left">
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="font-apple text-[17px] sm:text-lg leading-8 tracking-[-0.01em] text-gray-100/90"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </GlassCard>
  </div>
);
