import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

const chapters = [
  {
    num: "01",
    title: "when we'll meet again",
    paragraphs: [
      "hey, i don't rlly know when we'll see each other again after this. maybe christmas, maybe new year's, or maybe it'll take way longer than either of us expects. i honestly don't even know if i'll be back in jember around those times. n ig that's why i wanted to write this before u leave.",
    ],
  },
  {
    num: "02",
    title: "thank u, rlly",
    paragraphs: [
      "thanks for listening to all my stories evn though it through chat, especially during those nights when i couldn't sleep, when i was super anxious, terrified, sobbed uncontrollably, when my brain just wouldn't shut up, n when everything felt a too heavy.",
      "dealing with my illness hasn't been easy at all, n there were times when it felt like it was taking over my whole life. but somehow, u become the person i trust the most, the person i feel safest talking to, n the one person i never had to worry about judging me for what i was going through.",
      "thanks for putting up with all my late-night yapping, random fears, overthinking, n all the mess in my head, rlly appreciate it, more than u probably know.",
    ],
  },
  {
    num: "03",
    title: "don't be a stranger",
    paragraphs: [
      "n pls, don't be a stranger. even if we're miles apart, i hope we'll still talk. tell me about ur random days, funny stories, struggles, yearning, cdramas, or ur ongoing obsession with neo hou lmao. i'll still be here for all the lore.",
      "n i hope i can still yap to u too, especially on those random nights when i can't sleep, get scared over something, or my brain starts doing its thing again so yeah, don't disappear on me just bc ur in china now WKWKKWKW. i'm counting on u, sis",
    ],
  },
  {
    num: "04",
    title: "abt the keychain",
    paragraphs: [
      "also, if u're wondering why i'm giving u this keychain, long story short, everyone who was supposed to buy this from me ended up backing out. like, literally ALL of them 😭 n since i'm also slowly cutting down my pop mart collection. i figured this one should go to someone who'd actually appreciate it.",
      "besides u love MLP, specifically twilight sparkle, u like purple, n well… she's the main character, as u mentioned when we were at feli's living room, so yeah, ig it worked out. also, consider this ur early birthday present. so don't expect another one tho 😂, nahh im kidding",
    ],
  },
  {
    num: "05",
    title: "ur china era",
    paragraphs: [
      "anyway, good luck with ur china era. go have fun, make memories, don't forget to update me, n hope u're gon be able to meet neo hou aswell 🤣. take care of urself do not end up having mental disorder like me",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

export const Letter = () => (
  <div className="px-4 max-w-lg mx-auto space-y-16 sm:space-y-24 pb-8">
    {chapters.map((ch) => (
      <motion.div key={ch.num} {...fadeUp}>
        <GlassCard className="px-7 py-10 sm:px-10 sm:py-12" data-testid={`letter-card-${ch.num}`}>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-heading text-4xl sm:text-5xl font-bold text-purple-400/40 tracking-tighter">{ch.num}</span>
            <h2 className="font-heading text-base md:text-lg font-semibold tracking-[0.15em] uppercase text-purple-200">{ch.title}</h2>
          </div>
          <div className="space-y-6 text-left">
            {ch.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                className="font-serif text-lg sm:text-xl leading-loose text-gray-200"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    ))}
  </div>
);
