import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

const paragraphs = [
  "hey, i don't rlly know when we'll see each other again after this. maybe christmas, maybe new year's, or maybe it'll take way longer than either of us expects. i honestly don't even know if i'll be back in jember around those times. n ig that's why i wanted to write this before u leave.",
  "thanks for listening to all my stories evn though it through chat, especially during those nights when i couldn't sleep, when i was super anxious, terrified, sobbed uncontrollably, when my brain just wouldn't shut up, n when everything felt a too heavy. dealing with my illness hasn't been easy at all, n there were times when it felt like it was taking over my whole life. but somehow, u become the person i trust the most, the person i feel safest talking to, n the one person i never had to worry about judging me for what i was going through. thanks for putting up with all my late-night yapping, random fears, overthinking, n all the mess in my head, rlly appreciate it, more than u probably know.",
  "n pls, don't be a stranger. even if we're miles apart, i hope we'll still talk. tell me about ur random days, funny stories, struggles, yearning, cdramas, or ur ongoing obsession with neo hou lmao. i'll still be here for all the lore. n i hope i can still yap to u too, especially on those random nights when i can't sleep, get scared over something, or my brain starts doing its thing again so yeah, don't disappear on me just bc ur in china now WKWKKWKW. i'm counting on u, sis",
  "also, if u're wondering why i'm giving u this keychain, long story short, everyone who was supposed to buy this from me ended up backing out. like, literally ALL of them 😭 n since i'm also slowly cutting down my pop mart collection. i figured this one should go to someone who'd actually appreciate it. besides u love MLP, specifically twilight sparkle, u like purple, n well… she's the main character, as u mentioned when we were at feli's living room, so yeah, ig it worked out. also, consider this ur early birthday present. so don't expect another one tho 😂, nahh im kidding",
  "anyway, good luck with ur china era. go have fun, make memories, don't forget to update me, n hope u're gon be able to meet neo hou aswell 🤣. take care of urself do not end up having mental disorder like me",
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
            className="font-serif text-lg sm:text-xl leading-loose text-gray-200"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </GlassCard>
  </div>
);
