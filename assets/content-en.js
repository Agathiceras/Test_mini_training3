/* Mini_Training_3_Lesson_Organization - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='en';
const CONTENT = {
  flag:'🇬🇧', dir:'ltr',
  ui:{
    heroCard1:"<b>At your own pace.</b> Your progress is saved in this browser.",
    heroCard2:"<b>Practice included.</b> Every module ends with a short check.",
    pbLabel:'modules complete',
    tapOpen:'Tap to open',
    tapFlip:'Tap to flip',
    lblSee:'What you see',
    lblDo:'What you do',
    lblSay:'What you can say',
    lblReport:'Where to report',
    lblAvoid:'Avoid',
    lblTip:'Tip',
    stepOf:'Step {i} of {n}',
    next:'Next',
    pageTitle:"Mini-Training · Lesson Organisation & Discipline — Kodland Tutor Training",
    logoSub:'Tutor Development Department',
    heroEyebrow:"🎯 Mini-Training",
    heroTitle:"Running a <span class=\"h-pill\">Well-Organised</span> Lesson",
    heroIntro:"You have received this training because you have students who have requested a refund due to disorganization or discipline issues in class. Here, we'll show you what you can do as a tutor and how to handle these situations.",
    heroWork:"Work through 5 short modules. Each module check needs 70%+ to unlock the next. About 30–35 minutes total.",
    startBtn:"🚀 Start Training",
    pathLabel:'Your learning path',
    devTitle:'Dev: unlock all modules for review',
    backToPath:'Back to path',
    modulesPassed:'{done} / {total} modules passed',
    moduleN:'Module {n}',
    of:'of',
    locked:'🔒 Locked',
    passedBadge:'✅ Passed · {pct}%',
    reviewedBadge:'✅ Reviewed',
    startBadge:'▶ Start',
    reviewBadge:'▶ Review',
    objective:'Objective',
    startCheck:'▶ Start the module check',
    finishBtn:'▶ Finish the mini-training',
    doneBack:'✓ Done — back to path',
    ixBadge:'📋 Module check — 70% to unlock the next module',
    ixItemBadge:'📋 Module check — item {i} of {n}',
    scoreSoFar:'Score so far: {c} / {t}',
    continue:'Continue →',
    sortWrong:'Not quite — the right answer is "{label}".',
    resPassed:'Module passed!',
    resFailed:'Not quite there yet',
    resUnlocked:"You've unlocked the next module.",
    resDone:"You've completed this mini-training.",
    resNeed:'You need 70% to unlock the next module. Review the section above and try the check again.',
    resContinue:'Continue to learning path',
    resFinish:'Continue',
    resBack:'Back to path',
    resReview:'Review this module',
    doneEyebrow:'Mini-Training Complete',
    doneTitle:'🎉 Congratulations!',
    doneP1:"🎉 <strong>Congratulations! You've completed this mini-training.</strong>",
    doneP2:"You're all done here! Please return to the LMS training page where you accessed this mini-training to close out the assignment.",
    doneP3:"👉 <strong>If a check or assessment is listed directly below the training in the LMS, make sure to complete it and achieve a passing score</strong> — otherwise the assignment may remain incomplete.",
    doneP4:'Good luck! ❤️',
    doneP5:'',
    devUnlockAlert:'Dev mode: all modules are now unlocked for review.',
    devOn:'🔓 Dev mode ON — all modules unlocked',
    devOff:'🔒 Dev mode OFF — progress cleared',
    devBadge:'🔓 DEV MODE',
    doLabel:'✅ Do',
    avoidLabel:'🚫 Avoid',
    noticeLabel:'Notice:',
    cvSee:'What you see:',
    cvDo:'What you do:',
    dtExample:'Example from a real class',
    dtNext:'Next:',
    dtDone:"✅ That's all four areas. Next, classify what you see.",
    tlVideoTitle:'{label} — a real class example',
    tlVideoMeta:'Watch how this phase looks in a real lesson'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduction', emoji:'🧩', color:'var(--coral)',
 title:'Why You\'re Here',
 desc:'Why lesson organisation and discipline is the reason you can fix fastest — and the rules that apply once a refund request has already come in.',
 obj:'Understand why lesson organisation and discipline is the reason most directly about how you run the room, and exactly what to do (and not do) once a refund request already exists.',
 sections:[
  {t:'🧩 Two extremes, one root cause', html:`
   <div class="card"><p>Two very different-looking classrooms both end up flagged under this reason: a room that feels chaotic, and a room that's gone silent. Both are about the same thing — whether every child feels the lesson is a safe, structured place to take part.</p></div>
   ${co('co-idea','🎯',`<p><strong>This is the one reason on this list that's most directly about tutor behaviour — and therefore the one you can fix fastest.</strong> Unlike a level or a special need, this is a skill you can change starting your very next lesson, with no one else's permission needed.</p>`)}
  `},
  {t:'🛟 If a refund request already exists', html:`
   <div class="card"><p>Everything above is about catching this early. But you may be opening this training because a family has <strong>already</strong> asked for a refund. The rules below apply no matter the reason — read them first, then use the rest of this training to understand what led here and what you can still do in the lesson.</p></div>
   ${co('co-idea','💡',`<p><strong>The request itself is created by Client Service, not by you</strong> — that part isn't yours to control. What's still yours is everything that happens in the lesson from here, and that's not nothing.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Say nothing about the request itself</strong> — not to the child, not to the family — unless Client Service explicitly asks you to say something specific. Your job now is the lesson, not the conversation.</p>`)}
  `},
  {t:'🎯 Your next lesson is the save attempt', html:`
   <div class="card"><p>You may not get a chance to change anything else. Treat the very next lesson with this child as the moment that decides it.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Give them a real turn.</strong> Not a meaningless question — a genuine moment where they're seen and they succeed.`},
     {ic:'🏆', html:`<strong>Build in an early, visible win.</strong> They should leave the lesson feeling capable, not behind.`},
     {ic:'👀', html:`<strong>Specific attention</strong> — make them feel noticed for something concrete, not generically praised.`},
     {ic:'🤐', html:`<strong>No mention of the request</strong> — even if the child brings it up, redirect warmly and keep teaching.`}
   ])}
  `},
  {t:'📮 Notify fast, and know the one safe line', html:`
   <div class="card"><p>You can find out a request exists through Client Service's comments on the child's profile in BO — there's no automatic system that notifies you. Once you know, what you've seen in your lessons is information Client Service doesn't have any other way.</p></div>
   ${numlist([
     'Leave a comment in BO the same day with exactly what you\'ve seen — dates and specifics, not impressions',
     'Include the family\'s own words, verbatim, if you have them',
     'Loop in your Team Leader the same day',
     'Never confirm that a refund has been approved, or discuss any amount'
   ])}
   ${co('co-ok','✅',`<p><strong>The message that's always safe to say:</strong> <em>"Customer Service will help you with this."</em> That's where your part of the conversation ends — Client Service takes it from there.</p>`)}
  `},
  {t:'🌱 Keep it up afterward', html:`
   <div class="card"><p>Whether the request is withdrawn, the child stays in your group, or moves to another tutor or format, keep giving extra care for the next few lessons. A save that holds for one lesson and then quietly goes back to normal often doesn't hold at all.</p></div>
  `}
 ]
},
{id:'discipline', numLabel:'Module 1', emoji:'⚖️', color:'var(--coral)',
 title:'Discipline and Flexibility',
 desc:'The two extremes tutors face in an online room, age-appropriate ways to handle each, and how to adapt a task without losing the learning goal.',
 obj:'Recognise the two extreme patterns — too much noise, or a silent room — and apply age-appropriate techniques for each, plus know when to adapt a task instead of fighting for control of it.',
 sections:[
  {t:'📢 Extreme one: too much noise', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1760/860"><img src="Pictures_T3/image1.png" alt="A child covering their ears in a noisy room" style="width:109.09%;left:-4.545%;top:-12.56%"></div>
   <div class="card"><p>Students talking over each other about unrelated things, inappropriate language, not respecting classmates. Left alone, this quietly teaches the room that anything goes.</p></div>
   <div class="card"><h4>Younger children (6–8)</h4><ul>
     <li>Turn the rule into a game: "voice volume" as a dial you can point to, not a scolding</li>
     <li>Redirect with a task, not a command: "show me your screen and let's build this together" beats "stop talking"</li>
     <li>Praise the behaviour you want to see, immediately and specifically, the moment it happens</li>
   </ul></div>
   <div class="card"><h4>Older students (12+)</h4><ul>
     <li>Name it directly and briefly, one-to-one if possible: "let's keep the chat on-topic so everyone can follow"</li>
     <li>Give them a role that channels the energy — leading a step, helping a peer</li>
     <li>Set the expectation once, calmly, and follow through consistently rather than repeating warnings</li>
   </ul></div>
  `},
  {t:'🤫 Extreme two: the silent room', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1744/860"><img src="Pictures_T3/image2.png" alt="A shy child hiding behind their arms" style="width:110.09%;left:-5.046%;top:-12.56%"></div>
   <div class="card"><p>Students who don't talk and won't turn on their camera. This is common in preteens and teens — often shyness or self-esteem, though it can also be a sign of disinterest, so keep watching.</p></div>
   ${stepFlow([
     {ic:'1️⃣', label:'Ask nicely to turn on the camera'},
     {ic:'2️⃣', label:'If that doesn\'t work, try other ways to help them feel safe'},
     {ic:'3️⃣', label:'Get to know them — their interests are your way in'},
     {ic:'4️⃣', label:'Still nothing? Try private participation, always with a phrase that signals it\'s a safe space'}
   ])}
   ${co('co-idea','💡',`<p><strong>A concrete idea:</strong> let them keep the camera off but set a background of something they like — or, in a design/art course, invite them to draw something that represents them (not literally themselves) as their background. Invite the whole group to do the same, so it feels shared, not singled out.</p>`)}
   <div class="card"><h4>Phrase examples by age</h4>
   <p><strong>Younger (6–8):</strong> <em>"You don't have to show your face if you don't want to — but I'd love to see what you picked as your background! Can you tell me about it?"</em></p>
   <p><strong>Older (12+):</strong> <em>"No pressure on the camera — whenever you're ready. In the meantime, feel free to just type in the chat if that's easier."</em></p></div>
  `},
  {t:'🎨 When distraction means the task itself needs to flex', html:`
   <div class="card"><p>Sometimes the "indiscipline" is really a student who's disconnected because the exercise itself isn't landing for them — they won't do what's asked, or keep drifting off.</p></div>
   ${co('co-ok','✅',`<p><strong>Adapt it, without losing the objective.</strong> If today's goal is learning to animate, and the student doesn't want to follow the story in the lesson plan, let them animate whatever character, object or animal motivates them. Example: the objective is learning pixel-art animation technique — the student can animate any object they choose, as long as they're still practising the technique.</p>`)}
  `},
  {t:'👪 Family communication and class rules', html:`
   ${co('co-idea','📮',`<p><strong>Report cases of indiscipline, persistent silence, or heavy distraction</strong> to help build a fuller picture of the student — and because parents, once they know, can often help at home with the behaviour.</p>`)}
   ${co('co-star','📜',`<p><strong>Set class rules from lesson one</strong>, and check that students understand and agree with them — not just state them once and assume they landed.</p>`)}
   <img class="mt-pic" src="Pictures_T3/rules.png" alt="Example slide: Lesson conduct rules">
  `}
 ],
 ix:{
  title:'Discipline and Flexibility — module check',
  instr:'70% to unlock the next module.',
  items:[
   {type:'choice', prompt:'A younger student (6–8) keeps talking over the lesson about unrelated things. What\'s the better first move?', opts:['A clear command to stop talking, repeated until they listen','Waiting it out — it usually stops on its own','Redirecting them into the task, and praising the behaviour you want as soon as it appears'], correct:2, fb:'With younger children, redirecting into the activity — and catching the good behaviour the moment it happens — works better than a flat command.'},
   {type:'choice', prompt:'A student refuses to follow today\'s storytelling exercise but would happily animate something else. What should you do?', opts:['Let them animate what motivates them, as long as they\'re still practising the skill being taught','Insist on the exercise exactly as written, so the group stays aligned','Skip the activity for that student and move on'], correct:0, fb:'Flexibility on content, without losing the learning objective, keeps the student engaged and still learning.'},
   {type:'choice', prompt:'When should class rules be set?', opts:['Only once a problem comes up, so they feel relevant','From lesson one — and checked for understanding and agreement','Once a month, as a reminder for the whole group'], correct:1, fb:'Rules set and confirmed from lesson one prevent most of what this module covers.'},
   {type:'choice', prompt:'Why report cases of persistent silence or distraction to the family?', opts:['Because tutors aren\'t allowed to handle behaviour on their own','Only when it starts affecting the student\'s grades','It builds a fuller picture of the student, and parents can often help at home'], correct:2, fb:'Reporting isn\'t about escalating blame — it gives parents visibility they can act on too.'}
  ]
 }
},
{id:'selfreg', numLabel:'Module 2', emoji:'🧘', color:'var(--coral)',
 title:'Self-Regulation and Co-Regulation',
 desc:'How your own emotional reaction, as the adult in the room, shapes the behaviour of every student in it — and a practice with the most common hard moments.',
 obj:'Understand self-regulation and co-regulation, apply them to your own reactions during indiscipline, aggression, distraction and silence, and practise what to say in the four most common hard moments.',
 sections:[
  {t:'🧘 What these words mean, in practice', html:`
   <div class="card"><p><strong>Self-regulation</strong> is managing your own emotional state — noticing you're frustrated or thrown off, and choosing your response instead of reacting on impulse.</p>
   <p><strong>Co-regulation</strong> is what happens next: children, especially younger ones, borrow their emotional state from the calm (or not-calm) adult in the room. Your reaction doesn't just respond to their behaviour — it actively shapes it.</p></div>
   ${co('co-idea','💡',`<p>This applies directly to every situation in Module 1: indiscipline, an aggressive student, a distracted one, a silent one. Your own regulation is the first move in every one of them, before any technique.</p>`)}
  `},
  {t:'🎭 Applying it to each situation', html:`
   ${iconGrid([
     {ic:'📢', html:`<strong>Indiscipline.</strong> Respond calm and matter-of-fact, not sharp or annoyed — an irritated tutor escalates a noisy room; a steady one settles it.`},
     {ic:'😠', html:`<strong>An aggressive student.</strong> Lower your own voice and pace, don't mirror their intensity. Regulate yourself first, then address the behaviour.`},
     {ic:'📱', html:`<strong>A distracted student.</strong> Redirect with curiosity, not frustration — "what's got your attention right now?" lands very differently from a sigh.`},
     {ic:'🤐', html:`<strong>A silent student.</strong> Patience reads as safety. Visible impatience reads as pressure, and pressure makes a quiet child quieter.`}
   ])}
  `},
  {t:'🧯 What holds in every hard moment', html:`
   ${iconGrid([
     {ic:'📜', html:`<strong>Go back to the class rules.</strong> The rules you agreed in lesson one are your anchor — refer to them, not to your own annoyance.`},
     {ic:'🧊', html:`<strong>Stay calm, out loud.</strong> Take the beat you need before you respond, so you sound calm even if you don't feel it yet. Kids read tone faster than words.`},
     {ic:'🛡️', html:`<strong>Protect the rest of the group.</strong> If a student uses obscene language or attacks a classmate, you can mute them for a moment. Every other child deserves a safe lesson.`},
     {ic:'🤝', html:`<strong>Be firm on respect.</strong> Calm doesn't mean soft: respect for others is not negotiable, and the group needs to see you hold that line.`},
     {ic:'👪', html:`<strong>Ask the parent for help if needed</strong> — even during the lesson, if a situation can't be settled and the parent is nearby.`},
     {ic:'🌱', html:`<strong>Normalise mistakes.</strong> When something goes wrong in a task, treat it as a chance to learn, in front of everyone.`},
     {ic:'📝', html:`<strong>Report it.</strong> Tell the family about the incident and leave a comment in BO, so there's a record and nobody is caught by surprise.`}
   ])}
  `}
 ],
 ix:{
  title:'Practice: what would you say?',
  instr:'Now let\'s practise some of the most common hard moments in an online class. For each case, choose what you would say as the tutor. Each answer comes with the reason behind it. 70% to unlock the next module.',
  items:[
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20yells%20at%20the%20teacher.png" alt="A student yelling" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😠 A student yells at you.</strong> You ask Diego (11) to share his screen, and he shouts: <em>"This is so stupid! I'm not doing your boring exercise!"</em> The rest of the group goes quiet and watches. What do you say?`,
    opts:['"Don\'t you dare talk to me like that! One more time and you\'re out of this class."','"I can hear you\'re really frustrated, Diego, and I want to help. Remember our rule: in this class we speak to each other with respect. Take a breath — then tell me what\'s not working for you."','"Okay, fine, you don\'t have to do it. Let\'s just carry on with everyone else."'],
    correct:1,
    fb:'<strong>Why this works:</strong> the calm answer does three things at once — it names the emotion (so Diego feels heard), goes back to the class rule instead of your own anger, and opens a way back into the task. Shouting back models exactly the behaviour you want to stop and turns the room into a stage; giving in teaches the whole group that yelling gets you out of work. In an online class you can\'t walk over to the student, so your tone is your only tool. If it continues, mute him for a moment, contact the parent if needed, and afterwards report it to the family and leave a comment in BO.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20bullies%20other%20students.png" alt="A student mocking another" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😈 A student bullies a classmate.</strong> While Ana shares her project, Tomás unmutes and says <em>"That's the ugliest thing I've ever seen"</em> — and adds an insult. Ana goes silent. What do you say?`,
    opts:['"Tomás, you\'re being a bully and you should be ashamed of yourself in front of everyone."','"Come on, it was just a joke — let\'s keep going, Ana."','"Tomás, that isn\'t okay. In this class everyone\'s work is respected. I\'m muting your mic for a moment so Ana can finish — we\'ll talk after class. Ana, please go on, I love the colours you chose."'],
    correct:2,
    fb:'<strong>Why this works:</strong> your first job is to protect the student being targeted. Muting Tomás stops the harm immediately without a public argument, the rule is stated clearly (respect for others isn\'t negotiable), and you give Ana her moment back. "It was just a joke" tells the whole group that bullying is tolerated; shaming Tomás in front of everyone escalates it and humiliates a child, which rarely changes behaviour. After class: talk to him privately, tell his family, and leave a comment in BO. If it happens again during the lesson, ask the parent for help.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20cries%20because%20something%20isn%27t%20going%20well.png" alt="A student crying" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😢 A student cries because something isn\'t going well.</strong> Lucía (8) runs her game and gets an error for the third time. She starts crying: <em>"I can\'t do it, I\'m bad at this."</em> What do you say?`,
    opts:['"It\'s completely okay, Lucía — errors are how programmers learn. Even professional developers get errors every single day. Let\'s look at it together and find out what the computer is trying to tell us."','"Don\'t cry, it\'s not a big deal. Look, everyone else managed it — you can too."','"Don\'t worry, I\'ll just fix it for you so we can move on."'],
    correct:0,
    fb:'<strong>Why this works:</strong> it normalises the mistake and reframes it as part of learning — which is the truth in programming. It also keeps Lucía in charge of the fix, with you beside her, so she ends the moment feeling capable. "Don\'t cry" dismisses the feeling, and comparing her to classmates makes it worse. Fixing it for her ends the tears but confirms her belief that she can\'t do it. In an online class, sharing her screen and solving it together makes the support visible and personal.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20refuses%20to%20work.png" alt="A student refusing to work" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😒 A student refuses to work.</strong> Everyone is building the lesson\'s animation. Sofía (12) has her camera on but is doing nothing and says <em>"I don\'t feel like it."</em> What do you say?`,
    opts:['"If you don\'t do the exercise, I\'ll have to tell your parents."','"I noticed you haven\'t started — what\'s getting in the way? What if you animate a character you actually like? The goal is just to practise the movement technique."','"Fine — then just watch the others work today."'],
    correct:1,
    fb:'<strong>Why this works:</strong> curiosity instead of a threat finds out what\'s really behind the refusal (boredom, difficulty, tiredness), and offering a choice keeps the learning objective while giving her ownership of the task. Threatening to call parents turns you into the enemy and makes the refusal a power struggle; letting her watch teaches her that refusing works. If the refusal repeats across lessons, talk with the family and leave a comment in BO — that\'s a pattern worth reporting, not a punishment.'}
  ]
 }
},
{id:'tech', numLabel:'Module 3', emoji:'🔧', color:'var(--coral)',
 title:'Technical Problems and Classroom Balance',
 desc:'Why disorder is often a technical problem in disguise, how to keep the whole group learning while you fix one student\'s issue, a plan for fast finishers, attention for every child in a large group, and what to do when a student joins the lesson late.',
 obj:'Prevent most technical issues before they start, follow a clear protocol when they happen, keep fast finishers busy while you help others, give every child attention in a large group, and help a student who arrives late catch up without stopping the group.',
 sections:[
  {t:'⚖️ Why this belongs here', html:`
   <div class="card"><p>Technical problems often lead to disorganization in the classroom and, as a result, students get bored.</p>
   <p>Technical problems are normal and can happen to both instructors and students. Here's what you can do to prevent them from escalating:</p></div>
   ${co('co-idea','💡',`<p><strong>The golden rule.</strong> If you can't fix it yourself in <strong>10 minutes</strong>, stop trying in silence. <strong>Communicate → document → escalate.</strong> A parent who knows what's happening trusts you. A parent who doesn't, cancels.</p>`)}
  `},
  {t:'✅ Technical problems experienced by students', html:`
   <div class="card"><p>Often, the technical problems students encounter in class are related to the fact that they are using a browser other than Google Chrome or the wrong devices for the course, such as trying to watch the class on a tablet, cell phone, or iPad. That's why it's important for you to know the minimum requirements so you can help them.</p></div>
   ${doavoid(
    ["Google Chrome, updated — the only fully compatible browser",
     "At least 4 GB RAM (8 GB for Blender)",
     "A stable connection, minimum 10 Mbps — a wired connection beats Wi-Fi when possible",
     "At least 5 GB of free storage — Blender needs considerably more"],
    ["Safari — known bugs with the Kodland platform since the last update: buttons that don't respond, screens that don't load, errors on entry",
     "Tablets / iPads for courses like Roblox Studio — they need a real computer",
     "Assuming a Mac problem is disengagement before checking whether it's simply Safari"]
   )}
   ${co('co-idea','🍎',`<p>Watch for Mac + Safari specifically. If a Mac student can't get buttons to respond or the screen won't load, the fix is almost always: open the class in Google Chrome instead. Point families to google.com/chrome.</p>`)}
   <div class="card"><h4>What each course actually needs</h4><div class="tbl-wrap"><table>
   <tr><th>Course</th><th>Requirement</th><th>Level</th></tr>
   <tr><td>Python 1 / Pro</td><td>Chrome only, nothing to install — works on almost any device</td><td>Easy</td></tr>
   <tr><td>Digital Creativity, Graphic Design</td><td>Chrome + a browser tool (Canva, Krita) — check screen size/tablet requirements</td><td>Check</td></tr>
   <tr><td>Roblox Studio</td><td>Windows or Mac only (no tablet, no Linux), 4 GB RAM, Roblox Studio installed before lesson 1</td><td>Check</td></tr>
   <tr><td>Minecraft</td><td>Windows, Mac or Linux, Java Edition recommended, 4 GB RAM, own Minecraft account</td><td>Check</td></tr>
   <tr><td>3D Modeling</td><td>8 GB RAM minimum, mouse with scroll wheel required, dedicated GPU recommended</td><td>Demanding</td></tr>   </table></div></div>
  `},
  {t:'🧑‍💻 Technical issues with tutors', html:`
   <div class="card"><p>The same care applies to your own setup — a tutor's technical issue can stall a lesson just as much as a student's.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>Test 30 minutes early.</strong> Check your internet connection, camera, and microphone before each lesson. If you notice a problem, let your Team Leader know.`},
    {ic:'📷', html:`<strong>Look for alternatives.</strong> If turning off your camera improves your connection, do that.`},
    {ic:'🎙️', html:`<strong>Have a backup mic.</strong> If your headset isn't working, try another option, such as your computer's built-in audio, and always turn on background-noise reduction in Classroom.`},
    {ic:'📶', html:`<strong>Check your drivers, and whether a VPN is active</strong> — VPNs tend to slow your connection down.`},
    {ic:'🧊', html:`<strong>Working with a resource-heavy tool like Blender?</strong> The course includes a guide in the first few lessons on how to configure it for better performance.`},
    {ic:'💻', html:`<strong>Free up RAM before class.</strong> Google Chrome gives the best experience with Classroom, but it also tends to use a lot of RAM — close tabs and programs you don't need right now.`},
    {ic:'👂', html:`<strong>Confirm it live.</strong> Before the lesson starts, check with your students that they can see and hear you properly — that way you catch technical issues early.`}
   ])}
  `},
  {t:'🚨 React to it — the protocol', html:`
   ${co('co-danger','🚨',`<p><strong>First problem in a lesson:</strong> try to fix it in the first 10 minutes. If it\'s still not working, tell your Team Leader the same day — they\'ll decide on a make-up option. Message the parent within 30 minutes, warmly, saying you\'ve flagged it with your team.</p>
   <p><strong>Second lesson in a row with a problem:</strong> open a Client Service ticket the same day. Message the parent to say you\'ve escalated it and someone will follow up about a make-up lesson.</p>
   <p><strong>Once resolved:</strong> tell the parent, and close the loop — even if the problem seemed small.</p>`)}
  `},
  {t:'⚖️ Keeping the whole group learning', html:`
   <div class="card"><p>The failure mode isn't just the tech issue itself — it's a tutor so focused on one student's problem that the rest of the group loses five or ten minutes of lesson.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Set a time box.</strong> Give the affected student a quick fix attempt (switch browser, restart), then move the group on and follow up with that student after or between activities.`},
     {ic:'👥', html:`<strong>Give the group something to do</strong> the moment you start troubleshooting — don't leave them staring at a static screen.`},
     {ic:'🫂', html:`<strong>Stay calm, out loud.</strong> Your reaction is the lesson, before the fix is. A calm "this happens sometimes, let's work around it" keeps the room steady.`}
   ])}
  `},
  {t:'⚡ Nobody waits: a plan for fast finishers', html:`
   <div class="card"><p>Whenever you stop to help one student — with a technical issue or a difficult step — someone else finishes and has nothing to do. A student who waits gets bored, and a bored student starts talking, leaves, or decides the lesson is a waste of time. Families notice: <em>"the class spends most of the time waiting while the tutor helps the others."</em> The fix is to have the next step ready <strong>before</strong> anyone needs it.</p></div>
   ${stepFlow([
     {ic:'✅', label:'Done with the task?'},
     {ic:'⭐', label:'1. The extra activity in the lesson'},
     {ic:'🎨', label:'2. Make it yours: a variation or personal touch'},
     {ic:'🤝', label:'3. Help a classmate — when you ask them'},
     {ic:'📚', label:'4. A head start on the homework'}
   ])}
   ${iconGrid([
     {ic:'📌', html:`<strong>Put the ladder on screen or in the chat</strong> at the start of the practice: <em>"Finished? 1 → extra challenge · 2 → add your own twist · 3 → start the homework."</em> Students move on without waiting for you.`},
     {ic:'🎯', html:`<strong>Use what the manual already has.</strong> Many lessons include extra activities — prepare them the day before, so they're ready to drop in.`},
     {ic:'🤝', html:`<strong>Peer helpers, with rules.</strong> A fast student can help a classmate — you ask them, they explain without typing for the classmate, and the helper gets credit too.`},
     {ic:'🖥️', html:`<strong>Check in briefly between helps.</strong> <em>"Ana, show me your screen for ten seconds — great, now try challenge 2."</em> It keeps the fast ones seen, not just busy.`}
   ])}
  `},
  {t:'👀 Every child, every lesson — attention in a large group', html:`
   <div class="card"><p>In a big group it's easy to spend the lesson with the students who talk the most — and for a quiet child to go a whole hour without being addressed. To that child, and to their parent, it feels like <em>"nobody notices him"</em>. Attention doesn't need more time; it needs a system.</p></div>
   ${iconGrid([
     {ic:'📛', html:`<strong>Use names, often.</strong> Aim to address every student by name at least twice in each lesson — in the warm-up, and again during the practice.`},
     {ic:'🔄', html:`<strong>Rotate the turns.</strong> Share screens in turns, take answers from different students, and use a random picker so it feels fair — not always the same fast hands.`},
     {ic:'👍', html:`<strong>Quick group check-ins.</strong> <em>"Thumbs up when you've finished step 2."</em> In one glance you see who is stuck, without waiting for them to ask.`},
     {ic:'💬', html:`<strong>Private check-ins for quiet students.</strong> A short private chat message — <em>"How's it going? Show me where you are"</em> — reaches students who would never ask in front of everyone.`},
     {ic:'📝', html:`<strong>Keep a quick mental (or paper) list.</strong> Before the wrap-up, check: is there anyone I haven't spoken to today? Go to them first.`},
     {ic:'🙋', html:`<strong>Answer every raised hand,</strong> even if only to say <em>"I've seen you, Leo — you're next."</em> An ignored hand is one of the fastest ways to lose a child.`}
   ])}
  `},
  {t:'⏰ A student joins the lesson late', html:`
   <div class="card"><p>Students arrive late for many reasons: school ran over, the connection failed, the link got lost. If you restart every time someone joins, the whole group loses time. If nobody helps the latecomer, they spend the rest of the lesson lost, and that's what they tell their parents. The goal is to get them working in a couple of minutes, without stopping everyone else.</p></div>
   ${timeline([
     {ic:'👋', label:'When they join', items:[
       '<strong>Greet them briefly, by name:</strong> <em>"Welcome, Leo! We\'re on step 3: making the character jump."</em>',
       '<strong>Don\'t ask why they\'re late in front of the group,</strong> and don\'t restart the explanation for them.'
     ]},
     {ic:'💬', label:'In the first minutes', items:[
       '<strong>Post a one-line recap in the chat:</strong> what we did, what we\'re doing now and where to click.',
       '<strong>Give the group their next task first,</strong> then check privately with the latecomer: <em>"Share your screen for a moment, let me show you the step you missed."</em>',
       '<strong>Pair them with a buddy</strong> if the step is long, and check on them again a few minutes later.'
     ]},
     {ic:'📚', label:'After the lesson', items:[
       '<strong>If they missed a key part,</strong> share the materials (and the recording, if there is one) and say what to review.',
       '<strong>If it happens again,</strong> message the parent the same day, kindly, to find out why, and leave a comment in BO. If the reason is the schedule, tell your Team Leader: a schedule change isn\'t yours to decide.'
     ]}
   ])}
   ${co('co-idea','📝',`<p><strong>Prepare it before the lesson.</strong> Write one short recap line for each phase of your lesson plan. When someone arrives late, you only have to paste it in the chat.</p>`)}
   ${co('co-cute','🔧',`<p><strong>Late because of a technical problem?</strong> Help them get in, then follow the technical protocol above: 10 minutes to fix it, then communicate, document and escalate.</p>`)}
  `}
 ],
 ix:{
  title:'Technical Problems — module check',
  instr:'70% to unlock the final checklist.',
  items:[
   {type:'choice', prompt:'A student\'s Mac can\'t get any button to respond. What\'s your first move?', opts:['Ask them to open the class in Google Chrome','Assume they\'ve lost interest and move on','Wait for the platform to fix itself'], correct:0, fb:'Safari is the most common cause of unresponsive buttons on a Mac — switching to Chrome is the fast fix.'},
   {type:'sort', prompt:'Which kind of problem is this?', card:'A student\'s screen keeps freezing and the buttons don\'t respond.', zones:[
     {label:'⚖️ Discipline problem', fb:'Not quite — a frozen screen and unresponsive buttons are classic technical symptoms, most often Safari on a Mac.'},
     {label:'🔧 Technical problem', fb:'Correct — this points to a browser or device issue, not disengagement. It\'s most often Safari on a Mac.'}
   ], correctZone:1},
   {type:'choice', prompt:'A technical problem happens for the first time in a lesson. By when should you message the parent?', opts:['Only if it happens again','By the end of the week','Within 30 minutes, after trying to fix it for 10 minutes'], correct:2, fb:'A prompt, warm message is what keeps the family\'s trust intact.'},
   {type:'choice', prompt:'While you troubleshoot one student\'s connection, what should the rest of the group be doing?', opts:['Waiting quietly until you\'re done','Working on something you\'ve given them, so the lesson doesn\'t stall','Watching you troubleshoot, in case it happens to them too'], correct:1, fb:'Keeping the rest of the group working is what protects the whole lesson, not just one student\'s issue.'},
   {type:'sort', prompt:'Which kind of problem is this?', card:'A student keeps unmuting to talk about unrelated things during the explanation.', zones:[
     {label:'⚖️ Discipline problem', fb:'Correct — this is a classroom-management pattern to redirect, not a technical symptom.'},
     {label:'🔧 Technical problem', fb:'Not quite — this is a discipline pattern, not a device or connection issue.'}
   ], correctZone:0},
   {type:'choice', prompt:'You\'re helping one student fix an error, and three others have already finished. What should already be in place?', opts:['A "Finished?" ladder on screen or in the chat: extra challenge, a personal twist, then a head start on the homework','Nothing — they can wait a few minutes','Ask them to watch while you fix the error'], correct:0, fb:'With the next steps ready before anyone needs them, nobody waits — and waiting is what turns a fast student into a bored one.'},
   {type:'choice', prompt:'In a group of ten, a quiet student hasn\'t said a word all lesson. It\'s almost time for the wrap-up. What do you do?', opts:['Leave them alone — they\'ll talk when they\'re ready','Speak to them by name before the wrap-up: a private check-in or a turn to share their screen','Ask them a hard question in front of everyone so they take part'], correct:1, fb:'Check your mental list before the wrap-up: anyone you haven\'t spoken to goes first. A private check-in or an easy turn makes them feel seen without pressure.'},
   {type:'sort', prompt:'Is this a good move when a student joins the lesson late?', card:'A student joins 15 minutes late. You stop the group and repeat the whole explanation from the beginning.', zones:[{label:'💎 Good move', fb:'Not quite — the rest of the group waits while you repeat everything. Greet the student, post a one-line recap in the chat, and help them privately once the group is working.'},{label:'🗑️ Not a good move', fb:'Correct — a quick welcome, a one-line recap in the chat and a short private check get the latecomer working without stopping everyone.'}], correctZone:1}
  ]
 }
},
{id:'checklist', numLabel:'Final Checklist', emoji:'✅', color:'var(--coral)',
 title:'Final Checklist',
 desc:'No quiz here — just the essentials from this mini-training, before you close it out.',
 obj:'Review the checklist below. This module is ungraded — read it, then finish the mini-training.',
 sections:[
  {t:'🛟 If a refund request already exists', html:`
   ${numlist([
     'I left a comment in BO the same day I learned of the request, and looped in my Team Leader',
     'My next lesson with this student was a real save attempt — a real turn, a visible win, specific attention, no mention of the request',
     'I never confirmed approval or discussed an amount — I used the one safe line and left the rest to Client Service'
   ])}
  `},  {t:'⚖️ Keeping discipline in every lesson', html:`
   ${numlist([
     'I set the class rules in lesson one, check that students understand and agree with them — and refer back to them, not to my own annoyance',
     'With younger students (6–8), I turn rules into a game, redirect with a task instead of a command, and praise the behaviour I want the moment it appears',
     'With older students (12+), I name the behaviour briefly — one-to-one if possible — give them a role that channels their energy, and follow through consistently instead of repeating warnings',
     'In a silent room, I ask kindly for cameras first, then offer other safe ways in — a background they like, the chat, private participation — without pressure',
     'When a student disconnects from the task, I adapt it without losing the learning objective',
     'I regulate myself first: I take a beat, keep a calm voice and a steady pace, and never mirror a student\'s intensity',
     'I\'m firm on respect: if a student uses obscene language or attacks a classmate, I mute them for a moment to protect the group, and we talk after class',
     'When something goes wrong in a task, I normalise the mistake and treat it as a chance to learn',
     'If a situation can\'t be settled, I ask the parent for help — even during the lesson — and afterwards I report it to the family and leave a comment in BO',
     'I test my setup 30 minutes before class, and I keep the group working while I fix one student\'s technical issue',
     'I put a "Finished?" ladder on screen or in the chat — extra activity, a personal twist, helping a classmate, a head start on homework — so nobody waits',
     'I address every student by name at least twice per lesson, rotate turns, and check before the wrap-up who I haven\'t spoken to yet',
     'I answer every raised hand, and I use private check-ins for quiet students',
     'When a student joins the lesson late, I greet them briefly, post a one-line recap in the chat and help them privately once the group is working — and if it keeps happening, I message the parent and leave a comment in BO'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>That's the whole mini-training.</strong> When you're ready, continue — then complete the DST in the LMS to close out the assignment.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
