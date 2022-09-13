export const emailDataService = {
    getEmailData,
    getLoggedUser
}

const emailData = [
  {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551134930494,
    from: 'jojo@jojo.com',
    to: 'user@momo.com',
    status: 'sent',
    isStarred: false,
  },
  {
    id: 'e102',
    subject: 'Love You!',
    body: 'Damnnn son where you find this, bla, more bla bla',
    isRead: true,
    sentAt: 111113932594,
    from: 'jojo@jojo.com',
    to: 'user@momo.com',
    status: 'sent',
    isStarred: false,
  },
  {
    id: 'e103',
    subject: 'Whats up man',
    body: "and arrows of troubles, and sweat under a weary life, but that we know not to be: that makes us rather 'tis a consummation devoutly to be wish'",
    isRead: false,
    sentAt: 1271133931594,
    from: 'jojo@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e104',
    subject: 'Lets go',
    body: 'Would love to catch up sometimes, lets go to the park and get some strawberris while watching the bird fly away',
    isRead: true,
    sentAt: 1451133930794,
    from: 'jojo@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e105',
    subject: 'Whats up man',
    body: 'Would love to catch up sometimes, Damnnn son where you find this',
    isRead: false,
    sentAt: 1521133931594,
    from: 'jojo@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e106',
    subject: 'Lets go',
    body: 'Would love to catch up sometimes, lets go to the park and get some strawberris while watching the bird fly away',
    isRead: false,
    sentAt: 1451133930794,
    from: 'jojo@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e107',
    subject: 'Whats up man',
    body: 'Would love to catch up sometimes, Damnnn son where you find this',
    isRead: false,
    sentAt: 1521133931594,
    from: 'metoraf@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e108',
    subject: 'Lets go',
    body: 'Would love to catch up sometimes, lets go to the park and get some strawberris while watching the bird fly away',
    isRead: true,
    sentAt: 1451133930794,
    from: 'jojo@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e109',
    subject: 'Hey man, where is my girrafe?',
    body: 'I swear to god, this is the last time I ask you to give me back girrafe or I will kick your ass! ',
    isRead: false,
    sentAt: 1151133930794,
    from: 'jojo@jojo.com',
    to: 'momo@momo.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e110',
    subject: 'Your Physics summary is ready!',
    body: 'A constant force, acting on a particle of mass m, will produce a constant acceleration a. Let us choose the x-axis to be in the common direction of F and a. What is the work done by this force on the particle in causing a displacement ',
    isRead: false,
    sentAt: 145133930794,
    from: 'giddish22@jojo.com',
    to: 'user@momo.com',
    status: 'trash',
    isStarred: false,
  },
  {
    id: 'e111',
    subject: 'some hamlet line for your show, dont forget to',
    body: "Who would fardels bear, to suffer the unworthy take arms against a sea of time, the unworthy take arms against a sea of the native hue of resolution is sicklied o'er with the undiscover'd country from whose bourn no traveller returns, puzzles the will, and makes us rather bear, to grunt and lose the native hue of resolution",
    isRead: false,
    sentAt: 1251133930794,
    from: 'pitz89@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e111',
    subject: 'ONLY AT DOMINOS PIZZA! SUNDAY FUNDAY',
    body: "EW crust Pizza. The distinctive flavor of pesto Crust Pizza for just for just $9.99. It's a classic Hand Tossed dough and authentic Romano cheese. It's the Pesto Crust sensation, handmade just $9.99. It's a classic Hand Tossed dough and baked to golden perfection. The pesto is kneaded into our Classic Italian taste that you'll love from a zesty blend of sweet basil, parsley and you'll love from Domino's; the very first bite. For hot and you'll get a large 1-topping Pesto Crust from Domino's Pizza Now!",
    isRead: false,
    sentAt: 123133930794,
    from: 'lodgar3412@jojo.com',
    to: 'user@momo.com',
    status: 'sent',
    isStarred: true,
  },
  {
    id: 'e112',
    subject: 'Hey there, I got a story for you!!',
    body: 'One day when he was out walking, he came to an open place in the middle of the forest, and in the middle of this place was a large oak-tree, and, from the top of the tree, there came a loud buzzing-noise. Winnie-the-Pooh sat down at the foot of the tree, put his head between his paws and began to think. First of all he said to himself',
    isRead: false,
    sentAt: 123133930794,
    from: 'nunu@jojo.com',
    to: 'user@momo.com',
    status: 'sent',
    isStarred: true,
  },
  {
    id: 'e113',
    subject: 'Managing everything, please read carefully',
    body: ' work environment based marketplace on our customer satisfaction they needs, and practices. The following human resource policies are strategically important to the important to the high levels of performance - in quality',
    isRead: false,
    sentAt: 123133930794,
    from: 'importantcompany@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: true,
  },
  {
    id: 'e114',
    subject: 'Good to hear from you!',
    body: 'This made him feel like an old-style rootbeer float smells.',
    isRead: false,
    sentAt: 123133930794,
    from: 'ish@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: true,
  },
  {
    id: 'e115',
    subject: 'Some pictures from the vacation!',
    body: 'work environment based marketplace on our customer satisfaction they needs, and practices. The following human resource policies',
    isRead: false,
    sentAt: 123133930794,
    from: 'smith@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: true,
  },
  {
    id: 'e116',
    subject: 'About that job interview',
    body: 'The clock within this blog and the clock on my laptop are 1 hour different from each other.',
    isRead: false,
    sentAt: 123133930794,
    from: 'adam@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: true,
  },
  {
    id: 'e117',
    subject: 'get me the president!!',
    body: 'The estate agent quickly marked out his territory on the dance floor',
    isRead: false,
    sentAt: 123133930794,
    from: 'adam@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e118',
    subject: 'Happiness can be found in the depths of chocolate pudding.',
    body: 'He knew it was going to be a bad day when he saw mountain lions roaming the streets.',
    isRead: false,
    sentAt: 123133930794,
    from: 'adam@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e119',
    subject: 'Happiness can be found in the depths of chocolate pudding.',
    body: 'He knew it was going to be a bad day when he saw mountain lions roaming the streets.',
    isRead: false,
    sentAt: 123133930794,
    from: 'adam@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: 'e120',
    subject: 'Mothers spend months of their lives waiting on their children.',
    body: 'The murder hornet was disappointed by the preconceived ideas people had of him.',
    isRead: false,
    sentAt: 123133930794,
    from: 'adam@jojo.com',
    to: 'user@momo.com',
    status: 'inbox',
    isStarred: false,
  },
]
const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' }

function getEmailData() {
  return emailData
}

function getLoggedUser() {
    return loggedinUser
}