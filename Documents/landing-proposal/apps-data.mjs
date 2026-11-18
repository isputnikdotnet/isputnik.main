// One entry per application: the mockup's stand-in for _data/apps.yml.
// Text is HTML (escape & as &amp;). Facts come from the user guides in
// isputnik.home/docs/users and the add-ons' READMEs — keep them checked against those.
// Order = the Apps menu and the previous/next links.

const GET_HOME = { label: 'Get iSputnik', href: 'index.html#download' };

export const apps = [
  {
    slug: 'audiobooks', name: 'Audiobooks', short: 'audiobooks', color: '#7fb0dd',
    eyebrow: 'AUDIOBOOKS · IN ISPUTNIK.HOME',
    title: ['Every audiobook on the shelf.', 'Your place kept on every device.'],
    intro: 'Folders of MP3s and <code>.m4b</code> files become a library you can play — with chapters, covers and your place remembered. On the phone in the car, the laptop at home, or offline on a flight.',
    description: 'Your audiobooks on your own server: a player with chapters, your place kept on every device, offline listening — no cloud needed, no ads, no hidden costs.',
    get: GET_HOME,
    hero: { name: 'audiobooks-grid', alt: 'The audiobook library: a grid of covers' },
    what: {
      title: 'Press play, wherever you left off.',
      groups: [
        { title: 'Listen', text: 'A player made for books, not songs.', items: [
          'Built-in player with a chapter list — <code>.m4b</code> chapters included',
          'Speed control, and skip forward and back',
          'A sleep timer',
          'Bookmarks at the moments you want to come back to',
          'Mark a book finished and it leaves Continue listening' ] },
        { title: 'Pick up anywhere', text: 'Your place is yours, and it follows you.', items: [
          'Your position saved as you listen, per book and per person',
          'Stop on the phone, carry on at the laptop',
          'Continue listening on Home',
          'Download a book and listen with no connection',
          'Installs on your phone like an app' ] },
        { title: 'Find the next one', text: 'Browse the way you think about books.', items: [
          'Authors, narrators, series and categories',
          'Search by title, author and series',
          'Filters by narrator, length, tag and finished',
          'An A–Z index, with an EN / RU switch for mixed libraries',
          'Covers compact, comfortable or large' ] },
        { title: 'Your folders, understood', text: 'No re-tagging and no renaming before you start.', items: [
          'One folder, one book — <i>CD 1</i> and <i>Part 2</i> folders fold into one',
          'Titles, authors, narrators and covers from the files’ own tags',
          'Layouts for <i>Author / Series / Title</i> folders, with a preview first',
          'Look a title up in Audible, Open Library, Apple Books, LibriVox or FantLab',
          'Your edits win over every later scan' ] },
      ],
    },
    shots: [
      ['audiobook-detail', 'Book page', 'An audiobook’s page with its cover, narrator and chapters'],
      ['audio-player', 'Player', 'The audiobook player with speed, sleep timer and chapters'],
      ['audiobook-narrators', 'Narrators', 'Browsing the library by narrator'],
      ['audiobook-edit', 'Editing details', 'Editing an audiobook’s title, author and series'],
    ],
    private: {
      title: 'What you listen to is nobody else’s business.',
      items: [
        ['Your listening stays at home', 'Where you are in each book, your bookmarks and what you’ve finished are kept on your server, per person. There are no listening statistics going anywhere.'],
        ['Lookups only when you ask', 'Looking a title up online happens in the editor, when you press search, and asks for the words you typed. Nothing scans your library against an online service.'],
        ['Offline really is offline', 'A downloaded book plays with no connection at all — nothing has to check in before it starts.'],
        ['Your files are only read', 'Corrections live in iSputnik and survive every re-scan. The audio files themselves are read, never rewritten.'],
      ],
    },
    with: {
      title: 'A book is more than its recording.',
      items: [
        ['ebooks', 'The audiobook and the ebook of one title sit together as editions of the same book.'],
        ['stories', 'Review a book with stars, or place it in a story — a review of the audiobook shows on the ebook too.'],
      ],
    },
    needs: {
      title: 'Your folders and a browser.',
      items: [
        ['iSputnik.home', 'Audiobooks are part of it. Point an audiobook library at your folders: <code>.m4b</code>, <code>.m4a</code>, <code>.mp3</code>, <code>.flac</code>, <code>.ogg</code>, <code>.opus</code>, <code>.aac</code> and <code>.wav</code>.'],
        ['A phone or a computer', 'Any modern browser. Add it to your home screen to download books for offline listening.'],
      ],
    },
    faq: {
      guides: [['the Audiobooks guide', 'library-audiobooks.md']],
      items: [
        ['Do I have to rename or re-tag my files?', 'No. Each folder becomes one book, named from its tags or, failing that, from the folder. Deeper arrangements like <i>Author / Series / Title</i> are taught once, in the library’s Layout, with a preview before anything changes.'],
        ['Does it understand <code>.m4b</code> chapters?', 'Yes. The chapter marks inside an <code>.m4b</code> are read and listed. For a book made of many MP3s, each file becomes a chapter.'],
        ['Can two of us listen to the same book?', 'Yes. Everyone has their own account, so each person’s place, bookmarks and finished books are their own.'],
        ['Can I listen without a connection?', 'Yes. Download the book from its page in the installed app, and it plays anywhere — a commute, a flight, a cabin.'],
      ],
    },
  },

  {
    slug: 'ebooks', name: 'Ebooks', short: 'ebooks', color: '#24d1e0',
    eyebrow: 'EBOOKS · IN ISPUTNIK.HOME',
    title: ['Every book in the house.', 'Open right where you stopped.'],
    intro: 'EPUB, FB2 and PDF files become a library with covers, authors and series, and a reader in the browser that keeps your page on every device. Send a book to your e-reader whenever you like.',
    description: 'Your ebooks on your own server: a reader in the browser, your page kept on every device, quotes and highlights, Kindle and OPDS — no cloud needed, no ads, no hidden costs.',
    get: GET_HOME,
    hero: { name: 'ebooks-grid', alt: 'The ebook library: a grid of covers' },
    what: {
      title: 'From the shelf to your e-reader.',
      groups: [
        { title: 'Read', text: 'A reader in the browser — nothing to install.', items: [
          'EPUB and FB2 in the built-in reader',
          'Font, size, spacing and theme, kept from book to book',
          'Your place saved per book and per person',
          'Bookmarks, and highlights of the passages that matter',
          'PDFs open in the browser’s own viewer' ] },
        { title: 'Keep what you read', text: 'The best lines shouldn’t stay inside one book.', items: [
          'Select a passage and keep it as a quote',
          'Every quote and highlight, across all your books',
          'A quote of the day on Home',
          'Reviews with stars on the book’s page' ] },
        { title: 'Take it with you', text: 'Read here, or wherever you like to read.', items: [
          'Download the original file',
          'Send it to your Kindle or Kobo by email',
          'Reading apps like KOReader, Moon+ Reader and Thorium, over OPDS',
          'Pass a book to someone in the family',
          'Downloaded books stay readable offline' ] },
        { title: 'A tidy library', text: 'The library sorts itself out, and asks before it changes much.', items: [
          'One file, one book — details from the file itself',
          'The EPUB and PDF of one book become one title',
          'Editions — a translation, the audiobook — grouped on one page',
          'Authors, series, categories and an A–Z index',
          'Anything deleted waits in the recycle bin' ] },
      ],
    },
    shots: [
      ['ebook-reader', 'Reader', 'The ebook reader with its font and theme settings'],
      ['book-editions', 'Editions', 'A book’s editions: the ebook and the audiobook together'],
      ['ebook-authors', 'Authors', 'Browsing the library by author'],
      ['quotes', 'Quotes', 'Quotes saved from books'],
    ],
    private: {
      title: 'What you read is nobody’s data.',
      items: [
        ['Your reading stays at home', 'Your page in every book, your highlights and your quotes are kept on your own server. No store is watching what you read, or for how long.'],
        ['Reading apps get a key, not your password', 'An OPDS app signs in with a reader token you make in your profile — and can take back in one click.'],
        ['Your e-reader, through your own mail', 'Send to Kindle or Kobo goes out through the mail server you set up. Nobody in between keeps a copy.'],
        ['Your files are only read', 'Titles and covers come from the files; your corrections are kept in iSputnik and survive every re-scan.'],
      ],
    },
    with: {
      title: 'Books connect to everything else.',
      items: [
        ['audiobooks', 'Own the ebook and the audiobook? They sit together as editions of one book.'],
        ['stories', 'Reviews with stars, and book cards placed right inside a story.'],
        ['photos', 'A book, its quotes and the photos that go with it can share a collection.'],
      ],
    },
    needs: {
      title: 'Your books and a browser.',
      items: [
        ['iSputnik.home', 'Ebooks are part of it. Point an ebook library at your folder of EPUB, FB2 and PDF files.'],
        ['Send to e-reader', 'Mail set up on the server, and your Kindle or Kobo address in your profile. The device has to approve the server’s sender address.', 'optional'],
        ['A reading app', 'KOReader, Moon+ Reader, Thorium or any app that speaks OPDS.', 'optional'],
      ],
    },
    faq: {
      guides: [['the Ebooks guide', 'library-ebooks.md'], ['Quotes', 'quotes.md']],
      items: [
        ['Does a PDF remember my page?', 'No — PDFs open in the browser’s own viewer, which keeps no reading position and no highlights. That’s the format, not the app. If you have the EPUB too, read that.'],
        ['Can I read on my Kindle or Kobo?', 'Yes. <b>Send to → My e-reader</b> mails the book to your device once mail is set up on the server. Or use an OPDS app like KOReader to browse and download the library yourself.'],
        ['I have the same book as EPUB and PDF. Two entries?', 'One. Files with the same name in the same folder become one book offering both formats.'],
        ['What if I delete a book by mistake?', 'It goes to the recycle bin, not away for good, and can be restored until the bin is emptied.'],
      ],
    },
  },

  {
    slug: 'photos', name: 'Photos &amp; home video', short: 'photos', color: '#7ecf90',
    eyebrow: 'PHOTOS &amp; HOME VIDEO · IN ISPUTNIK.HOME',
    title: ['Every photo the family has.', 'None of it in the cloud.'],
    intro: 'Decades of pictures and home videos, from every phone, camera and shoebox of prints — together on a computer in your home. Find any moment, see who was there, and remember it together.',
    description: 'Every photo and home video your family has, on your own server. Timeline, albums, memories, maps, face recognition and phone backup — no cloud needed, no ads, no hidden costs.',
    get: GET_HOME,
    hero: { name: 'gallery-grid', alt: 'The iSputnik photo gallery: a grid of photographs grouped by date' },
    what: {
      title: 'From the shoebox to the big screen.',
      groups: [
        { title: 'Find any moment', text: 'Your folders, read where they are, turned into a gallery you can actually browse.', items: [
          'A timeline of every photo and video, by date',
          'Albums, folders and favourites',
          'Memories: this day in years gone by',
          'A map of where they were taken, and a Places view',
          'Search and filters by person, place, year and tag',
          'Videos play in the browser, even formats it can’t open by itself' ] },
        { title: 'Bring them all home', text: 'Every phone, every relative, every old print — into one place, without copies piling up.', items: [
          'Phone backup into each person’s own private library',
          'Uploads filed into dated folders for you',
          'Photo Inbox for scans and relatives’ photos, with a copy check',
          'Drop links so family without an account can send you photos',
          'Move a folder to another library without breaking a thing' ] },
        { title: 'Remember together', text: 'The people who were there know the stories. Make it easy for them to tell them.', items: [
          'Review mode: one photo at a time — when, where, who, what you remember',
          'Dictate instead of typing, or keep a voice recording on a photo',
          'Notes under a photo for the next person who opens it',
          'Send a photo or album to family, or by an expiring guest link',
          'Slideshows with music and a title card, rendered to MP4' ] },
        { title: 'Keep it tidy', text: 'Big collections get messy. Tidy them up without ever being afraid to.', items: [
          'Face recognition that groups the family into people',
          'Duplicate cleanup that remembers every decision you made',
          'Near-identical photos flagged as a judgement call, never removed for you',
          'A recycle bin for anything removed, until you empty it',
          'Folder locks that keep precious folders out of every cleanup' ] },
      ],
    },
    shots: [
      ['gallery-memories', 'Memories', 'Memories: photos from this day in past years'],
      ['gallery-people', 'People', 'People: faces grouped and named'],
      ['gallery-map', 'Map', 'The photo map with clusters of photos by place'],
      ['gallery-album', 'Albums', 'An album of photographs'],
      ['gallery-slideshows', 'Slideshows', 'Slideshows, suggested and made by hand'],
      ['gallery-voice-note', 'Voice notes', 'A voice recording kept on a photo, with its waveform'],
    ],
    private: {
      title: 'Your photos don’t leave the house.',
      items: [
        ['Faces are found at home', 'Face recognition is off until you turn it on, and then it runs on your own server, in the faces container beside iSputnik. Not one photo is sent away to be analysed.'],
        ['Your phone, your library', 'Phone backup goes straight from the phone to your server, over the home Wi-Fi or your VPN — never mobile data, never someone’s cloud. It lands in a library only you can open; administrators see how full it is, never what’s in it.'],
        ['Maps without being watched', 'Turn on offline maps and the map comes through your server and is kept there, so the map provider no longer sees where in the world you’re looking.'],
        ['Place names worked out at home', '“Verona, Veneto, Italy” comes from a place-name database your server downloads once. After that, your photos’ locations are never sent anywhere to be looked up.'],
        ['Originals are never touched', 'iSputnik reads your folders where they are. Deleting a photo on the phone leaves the copy at home, and anything a cleanup removes waits in the recycle bin.'],
      ],
    },
    with: {
      title: 'Photos are where the stories start.',
      items: [
        ['stories', 'Place photos, albums and maps right where they belong in a story.'],
        ['family-tree', 'The people recognised in your photos take their place on the tree.'],
        ['tv', 'Family photos and slideshows on the big screen.'],
        ['ebooks', 'Quotes and books sit beside photos in collections and on Home.'],
      ],
    },
    needs: {
      title: 'Probably what you already have.',
      items: [
        ['iSputnik.home', 'Photos are part of it. Point a gallery library at your photo folders and it does the rest.'],
        ['Face recognition', 'Add the isputnik.faces container beside it. It works on the processor; no graphics card needed.', 'optional'],
        ['Phone backup', 'The PhotoSync app on Android or iPhone, a third-party app that talks to your server directly.', 'optional'],
      ],
    },
    faq: {
      guides: [['the Gallery guide', 'library-gallery.md'], ['Backing up your phone', 'phone-backup.md']],
      items: [
        ['Do I have to move or reorganise my photos?', 'No. A gallery library shows whatever is in its folder, the way you already keep it. Photos copied there appear after the next scan, and the originals are never renamed, moved or deleted.'],
        ['Who can see the photos my phone backs up?', 'Only you. They go into your own library, which not even the administrators can open. Photos you move into a family library are seen by whoever can open that one.'],
        ['If I delete a photo on my phone, is it deleted at home too?', 'No. Phone backup only ever adds, so free up the phone as you like. A lost phone is revoked in one click, and what it sent stays.'],
        ['Can my phone back up when I’m away from home?', 'Only through a VPN into the house. Never over mobile data or the open internet — the phone simply catches up when you’re home.'],
      ],
    },
  },

  {
    slug: 'stories', name: 'Stories', short: 'stories', color: '#e3b566',
    eyebrow: 'STORIES · IN ISPUTNIK.HOME',
    title: ['The family’s stories, written down.', 'With the photos right where they belong.'],
    intro: 'A story is a page you write together: your words, with photos, videos, maps, people from the tree, and grandma’s voice telling the ending. It points at what’s already in the house — it never copies it.',
    description: 'Write the family’s stories on your own server: travel blogs, memories, recipes and reviews, with photos, maps and narration in place — no cloud needed, no ads, no hidden costs.',
    get: GET_HOME,
    hero: { name: 'story-hero', alt: 'A story’s front page with its cover, dates and chapters' },
    what: {
      title: 'Write it once. Keep it for good.',
      groups: [
        { title: 'Write', text: 'Start from a shape, then make it yours.', items: [
          'A story, a memory, a travel blog, a review or a recipe',
          'Travel blogs laid out day by day from the trip’s dates',
          'Chapters, each with its own cover, date and place',
          'Photos, albums, slideshows, maps, books and people as blocks',
          'A draft only you see, until you publish it' ] },
        { title: 'Read and listen', text: 'A story reads like a small website of its own.', items: [
          'A reading view with no app around it',
          'A map of the journey, one pin per chapter',
          'Every chapter in view beside the page',
          'Narration recorded in the editor, or an old recording uploaded',
          'Day before and day after, at the foot of each chapter' ] },
        { title: 'Recipes and reviews', text: 'Two kinds of story every family keeps anyway.', items: [
          'Recipes start with Ingredients, Method and Notes',
          'Paste a link to a recipe page and it’s written for you',
          'Serves and total time on the recipe’s front page',
          'A review with stars, from any book’s page',
          'A review of the audiobook shows on the ebook too' ] },
        { title: 'Share and shelve', text: 'Hand a story on, or keep it among the people it belongs to.', items: [
          'Collections like <i>Family Story</i> or <i>Trips</i>, laid out year by year',
          'Private collections, with View, Contribute and Manage',
          'Send a story to someone’s inbox',
          'Guest links for relatives without an account',
          'A deleted story waits in the recycle bin, whole' ] },
      ],
    },
    shots: [
      ['story-edit', 'Editor', 'The story editor with chapters beside the page'],
      ['story-add-block', 'Adding a block', 'Adding a photo, map, book or person to a story'],
      ['story-map-block', 'Map of the journey', 'A map block with one pin per chapter'],
    ],
    private: {
      title: 'A story never shows more than it should.',
      items: [
        ['Nobody sees what they couldn’t already', 'Every photo, album and book in a story is checked against the reader’s own access. Anything out of their reach shows as a polite placeholder, not a leak.'],
        ['Guest links you stay in charge of', 'A guest sees the story as it is now, and only what the story shows — whole albums only if you say so. Delete the story and its links stop answering.'],
        ['Nothing is copied', 'A story points at what’s already in the house. Delete it, and every photo, book and recording it pointed at stays exactly where it was.'],
        ['A recipe page read once', 'Starting a recipe from a link reads that page’s text and keeps nothing but what lands in your story. An administrator can switch it off altogether.'],
      ],
    },
    with: {
      title: 'A story pulls the whole house together.',
      items: [
        ['photos', 'Photos, albums, slideshows and maps, placed where they happened in the telling.'],
        ['family-tree', 'A person block puts the story on their profile in the tree.'],
        ['ebooks', 'Book cards in a story, and reviews on the book’s own page.'],
        ['audiobooks', 'Review the audiobook, and the review shows on every edition.'],
      ],
    },
    needs: {
      title: 'Something to tell.',
      items: [
        ['iSputnik.home', 'Stories are part of it, and use the photos, books and people already there.'],
        ['App storage', 'Switched on once in the control panel, so narration and uploaded photos have somewhere to live.', 'for narration'],
        ['A way in from outside', 'For guest links to reach relatives far away, your server has to be reachable from the internet — the guide shows a safe way.', 'for guest links'],
      ],
    },
    faq: {
      guides: [['the Stories guide', 'stories.md'], ['Exposing to the internet', 'exposing-to-the-internet.md']],
      items: [
        ['Does a story copy my photos?', 'No. The photo in a story <i>is</i> the photo in your gallery: rotate it or tag someone in it, and the story shows the change.'],
        ['Can relatives without an account read it?', 'Yes. <b>Send → Share link</b> makes a guest link that opens in any browser, no account needed.'],
        ['Can I record grandma telling it?', 'Yes. <b>Add → Narration</b> records right in the editor, up to fifteen minutes a take — or upload a recording you already have.'],
        ['What happens if I delete a story?', 'It goes to the recycle bin, whole — chapters, stars, guest links and all — and can be restored for 30 days, unless your administrator set a different time.'],
      ],
    },
  },

  {
    slug: 'family-tree', name: 'Family tree', short: 'the family tree', color: '#d98a4b',
    eyebrow: 'FAMILY TREE · IN ISPUTNIK.HOME',
    title: ['Your family, branch by branch.', 'Kept at home, not on a genealogy site.'],
    intro: 'The people in your family, how they’re related, what happened in their lives, and the photos that go with them — with living relatives kept private, and each branch looked after by the cousin who knows it best.',
    description: 'Your family tree on your own server: an interactive chart, life events, sources, a map, photos from your gallery and GEDCOM — no cloud needed, no ads, no hidden costs.',
    get: GET_HOME,
    hero: { name: 'family-tree', alt: 'The family tree chart, centred on one person' },
    what: {
      title: 'From one name to the whole family.',
      groups: [
        { title: 'Build it', text: 'Start with a name. Everything else can come later.', items: [
          'Only a name needed to add someone',
          'Forgiving dates: <i>1943</i>, <i>May 1943</i> or <i>9 May 1943</i>',
          'Parents, partners, children and siblings — remarriages and step-children too',
          'Add relatives straight from the chart',
          'Names in another language, found by either spelling' ] },
        { title: 'See it', text: 'The family from every angle.', items: [
          'An interactive chart centred on anyone',
          'Profiles with life events, sources and a life story',
          'Families and a timeline',
          'A map of births, marriages, events and deaths',
          'One person’s places, joined in the order they lived them' ] },
        { title: 'Photos and faces', text: 'The tree points at your gallery — nothing is copied.', items: [
          'Attach any photo from the gallery',
          'Link a face, and every photo of that person appears',
          'Portraits cut from the gallery, or uploaded',
          'The stories each person appears in, on their profile' ] },
        { title: 'Share it safely', text: 'Everyone can see it. Only the right people can change it.', items: [
          'Living relatives’ details kept private from newcomers',
          '“You” in the tree for each member',
          'Branch editors for the cousin who knows their side',
          'GEDCOM import and export — Ancestry, MyHeritage, Gramps',
          'A package that moves the whole tree to another server' ] },
      ],
    },
    shots: [
      ['family-person', 'A profile', 'A person’s profile with events, sources and photos'],
      ['family-families', 'Families', 'The Families page, one card per family'],
      ['family-timeline', 'Timeline', 'A timeline of the family’s events'],
      ['family-gedcom', 'GEDCOM', 'Importing and exporting GEDCOM'],
    ],
    private: {
      title: 'Your family isn’t a dataset.',
      items: [
        ['No genealogy company in the middle', 'Names, dates, places and portraits live in your own database. No service holds your family tree, and nobody can change the terms on it.'],
        ['Living relatives stay private', 'People who don’t edit a branch see a living relative’s name, place in the tree and portrait — no dates, places, events or map pins — unless you let them.'],
        ['Places looked up at home first', 'Place suggestions come from an offline list. <b>Search online</b> asks OpenStreetMap only when you press it, and only for the words you typed.'],
        ['Editors can’t overreach', 'A branch editor changes the people tagged for them. Deleting people, importing GEDCOM and tagging stay with administrators.'],
      ],
    },
    with: {
      title: 'The people behind every photo.',
      items: [
        ['photos', 'Faces recognised in the gallery bring every photo of a person to their profile.'],
        ['stories', 'A person block in a story lists it on their profile — recipes included.'],
      ],
    },
    needs: {
      title: 'The family’s memory, and a backup.',
      items: [
        ['iSputnik.home', 'The family tree is part of it. There is nothing to scan: type people in, or import a GEDCOM file.'],
        ['A backup', 'The tree lives only in the app’s database. Include the database in your backups, or export a GEDCOM file now and then.'],
        ['Face recognition', 'The isputnik.faces container, to bring every photo of a person to their profile.', 'optional'],
      ],
    },
    faq: {
      guides: [['the Family tree guide', 'family-tree.md']],
      items: [
        ['Can I bring my tree from Ancestry or MyHeritage?', 'Yes — export a GEDCOM file there and import it here. People, families, events and sources come across; photos aren’t part of GEDCOM, so you attach them again from the gallery.'],
        ['Who can see living relatives?', 'Members who don’t edit their branch see only a living relative’s name, place in the tree and portrait, unless an administrator allows them the details.'],
        ['Can a cousin look after their own side?', 'Yes. Tag the people in their branch and make them its editor. They can edit and add relatives there, but can’t delete people or import files.'],
        ['What if I only know the year?', 'That’s enough. A year-only date stays a year-only date — nothing invents a day for it.'],
      ],
    },
  },

  {
    slug: 'movies', name: 'Movies &amp; TV', short: 'movies &amp; TV', color: '#e0766b', addon: true,
    eyebrow: 'MOVIES &amp; TV · ADD-ON BESIDE ISPUTNIK.HOME',
    title: ['A cinema of your own.', 'No subscription. Nothing disappears.'],
    intro: 'The films and series you own, scanned from your folders with posters, cast and genres, and played in any browser, on the phone, or on the TV. Everyone’s place is their own, and nothing about what you watch leaves the house.',
    description: 'Your films and shows on your own server: posters, cast, continue watching, skip intro, profiles and downloads — no subscription, no ads, no hidden costs.',
    get: { label: 'Get the video add-on', href: 'https://github.com/isputnikdotnet/isputnik.video' },
    hero: { name: 'video-home', alt: 'The video page: a featured film over rows of films and shows' },
    what: {
      title: 'Everything you’d expect. Nothing watching you.',
      groups: [
        { title: 'Browse', text: 'Your folders, dressed like a streaming service.', items: [
          'Films and shows from the folders Jellyfin and Kodi read',
          'Posters, backdrops and descriptions from <code>.nfo</code> files or TMDB',
          'Cast &amp; crew pages, genres and film sets',
          'Rows you arrange yourself, beside Continue and Recently added',
          'Search, filters and an A–Z index',
          'Edit any title’s details by hand' ] },
        { title: 'Watch', text: 'Press play. The server works out the rest.', items: [
          'Plays in any browser — what it can’t play is converted as you watch',
          'Sound tracks and subtitles, inside the film or beside it',
          'Skip recap, skip intro, and the next episode at the credits',
          'Continue watching and watched marks, per person',
          'Mark a whole show or season watched' ] },
        { title: 'Away from home', text: 'Your films go where you go.', items: [
          'Quality capped for viewers outside the house, 720p to start',
          'Pick 1080p, 720p or 480p for a weak Wi-Fi corner',
          'Download a film or a whole season to watch offline',
          'Smaller copies prepared for you, with an email when they’re ready' ] },
        { title: 'The household', text: 'One server, everyone’s own way of watching.', items: [
          'Profiles like Kids, Grandma or Russian, each with its own history',
          'A PIN that keeps Kids in Kids',
          'Who may watch, and from where: home only, trusted networks or anywhere',
          'Which libraries each person sees',
          'Converts on an Intel GPU, with HDR made right for ordinary screens' ] },
      ],
    },
    shots: [
      ['video-film', 'A film’s page', 'His Girl Friday: poster, genres, My list and Download'],
      ['video-download', 'Download', 'Downloading a film to watch with no connection'],
      ['shots/tv-show', 'On the TV', 'A show’s episodes in iSputnik TV'],
    ],
    private: {
      title: 'Watch what you like. Nobody’s counting.',
      items: [
        ['Nothing reported about what you watch', 'Progress, watched marks and history are kept on your server, per person and per profile. There’s no one on the other end to report to.'],
        ['Film details with your own key', 'Posters and descriptions come from your <code>.nfo</code> files first, then TMDB with a free key of your own. TMDB is asked about titles — never sent a file.'],
        ['No door of its own', 'The video engine has no pages and no port open to the internet. Everyone goes through iSputnik’s sign-in, two-factor included.'],
        ['Your files are only read', 'The video folders are mounted read-only. Deleting a library forgets its catalogue and leaves every file where it was.'],
      ],
    },
    with: {
      title: 'Made for the sofa, too.',
      items: [
        ['tv', 'Films and shows on the TV with the remote, your place shared with the website.'],
        ['photos', 'Home videos stay in Photos; films and shows live here.'],
      ],
    },
    needs: {
      title: 'One more container, and the films you own.',
      items: [
        ['iSputnik.home', 'Video libraries are added and shared there, like every other library.'],
        ['The video add-on', 'The <code>isputnik.video</code> container, from Unraid Community Applications or Docker, paired with a secret made in the control panel.'],
        ['A TMDB key', 'A free themoviedb.org account, for posters and descriptions your folders don’t have.', 'optional'],
        ['An Intel GPU', 'Quick Sync converts several films at once for little processor. Without it, the processor does the work.', 'optional'],
        ['A fast disk', 'A folder for conversion, needed for copies to download.', 'optional'],
      ],
    },
    faq: {
      guides: [['Adding the games, video and faces apps', 'apps.md']],
      items: [
        ['Do I have to rename my files?', 'Probably not. It reads the layout Jellyfin and Kodi read, takes <code>.nfo</code> files first, and fills in the rest from the names — release names included.'],
        ['Will it play my <code>.mkv</code> files?', 'Yes. What a browser can play goes as it is; the rest is converted while you watch — only the sound when the picture is fine.'],
        ['Can we watch away from home?', 'Yes, at up to 720p to start with: one viewer needs about 5 Mbit/s of your upload. Or download a film before you go.'],
        ['Does it need a graphics card?', 'No. An Intel processor’s graphics help a lot when several people watch converted films at once.'],
      ],
    },
  },

  {
    slug: 'games', name: 'Family games', short: 'family games', color: '#b49be0', addon: true,
    eyebrow: 'FAMILY GAMES · ADD-ON BESIDE ISPUTNIK.HOME',
    title: ['Game night, at home.', 'No app store, no ads, no strangers.'],
    intro: 'Chess, checkers, dominoes and more — two on one screen, against the computer, or online between family members on any device. Signed in once, through iSputnik, and played on your own server.',
    description: 'Family games on your own server: chess, checkers, dominoes, arcade games and puzzles, online between family members — no ads, no in-app purchases, no strangers.',
    get: { label: 'Get the games add-on', href: 'https://github.com/isputnikdotnet/isputnik.games' },
    hero: { name: 'games-lobby', alt: 'The games lobby: every game, and the family leaderboard' },
    what: {
      title: 'Board games, arcade games and puzzles.',
      groups: [
        { title: 'Board games', text: 'The ones the family already knows.', items: [
          'Chess, with blitz clocks, draw offers and a coach',
          'Checkers — Russian draughts',
          'Dominoes: <i>Kozyol</i> for two',
          'Dots',
          'Star Battle — a sea battle in space' ] },
        { title: 'Arcade and puzzles', text: 'Something quick between the long games.', items: [
          'Sputnik Catch, a handheld arcade game',
          'Torpedo Run',
          'Crossmath puzzles, with harder ones offered when you’re ready' ] },
        { title: 'Ways to play', text: 'Across the table or across the country.', items: [
          'Two on one screen',
          'Against the computer — the chess computer learns your level',
          'Online between family members, from any device',
          'Invitations with a QR code',
          'Invite a guest into one match',
          'Play on with no connection' ] },
        { title: 'Keep score', text: 'For the family’s bragging rights.', items: [
          'Results and ratings for the household',
          'Step back through a finished chess game',
          'Saved games to pick up later' ] },
      ],
    },
    shots: [
      ['games-chess', 'Chess', 'A game of chess on one screen, with the move log'],
      ['games-dominoes', 'Dominoes', 'A hand of Kozyol against the computer'],
      ['games-sputnik', 'Sputnik Catch', 'The Sputnik Catch handheld, playing itself'],
      ['games-invite', 'Invite to play', 'Inviting Sam to a game of chess'],
    ],
    private: {
      title: 'Only the family at the table.',
      items: [
        ['Matches between people you know', 'Online games are played between members of your household, on your server. There are no strangers, no public lobbies and no chat with the internet.'],
        ['A guest gets one match', 'A guest link opens one match and nothing else — no library, no photos, no other games.'],
        ['No ads between moves', 'No adverts, no in-app purchases and no account with anybody. The games are simply there.'],
        ['Behind iSputnik’s door', 'The games container never faces the network. Sign-in, two-factor and rate limits are iSputnik’s, so they cover every game too.'],
      ],
    },
    with: {
      title: 'Play on the big screen.',
      items: [
        ['tv', 'Chess, Checkers, Sputnik Catch and Torpedo Run, played with the TV remote.'],
      ],
    },
    needs: {
      title: 'One more container.',
      items: [
        ['iSputnik.home', 'Games appear in its menu once paired, and use its accounts.'],
        ['The games add-on', 'The <code>isputnik.games</code> container, from Unraid Community Applications or Docker, paired with a secret made in the control panel.'],
        ['A shared Docker network', 'So iSputnik can reach the games container by name — or publish its port on your LAN instead.'],
      ],
    },
    faq: {
      guides: [['Adding the games, video and faces apps', 'apps.md']],
      items: [
        ['Can grandparents play from their own house?', 'Yes, with their own account, from any browser — as long as your iSputnik can be reached from outside the house.'],
        ['Can someone without an account join in?', 'For one match, yes: invite them as a guest, and the link opens that match only.'],
        ['Can we play on the TV?', 'Chess, Checkers, Sputnik Catch and Torpedo Run are built into iSputnik TV, played with the remote.'],
        ['Does it work without a connection?', 'Yes. Once opened, games against the computer and on one screen carry on offline.'],
      ],
    },
  },

  {
    slug: 'tv', name: 'iSputnik TV', short: 'iSputnik TV', color: '#92a6b8', addon: true,
    eyebrow: 'ISPUTNIK TV · ANDROID TV &amp; FIRE TV',
    title: ['Your films on the big screen.', 'With the remote, not a browser.'],
    intro: 'A native app for Android TV, Google TV and Fire TV. It opens to your own home screen — what you were watching, what’s new — with nothing on it but what’s on your server, and a place for everyone in the room.',
    description: 'iSputnik TV for Android TV, Google TV and Fire TV: your films, shows, family photos and games on the television — no subscription, no ads, no tracking.',
    get: { label: 'Download the TV app', href: 'https://github.com/isputnikdotnet/isputnik.tv/releases/latest/download/iSputnik-TV.apk', icon: '↓' },
    hero: { name: 'shots/tv-movies', alt: 'iSputnik TV: a film featured over rows of recently added movies' },
    shotsTag: 'Actual app screenshots · public-domain films',
    what: {
      title: 'Sit back. It knows where you were.',
      groups: [
        { title: 'Watch', text: 'Made for the remote, from the first screen.', items: [
          'Continue watching first, then what’s new',
          'Movies and Shows, with sorting and film sets',
          'Search at the top',
          'Sound and subtitles, your language remembered',
          'Skip intro, and the next episode at the credits',
          'Plays almost anything — the server converts what the TV can’t' ] },
        { title: 'Everyone in the room', text: 'One TV, the whole household.', items: [
          'Who’s watching? Profiles like Kids, Grandma or Russian',
          'Each profile with its own Continue watching, watched marks and My list',
          'A PIN that keeps Kids in Kids',
          'Your own theme’s colours, always dark' ] },
        { title: 'Photos and games', text: 'Not only films.', items: [
          'Family photos chosen for the TV, by profile',
          'Albums and slideshows on the big screen',
          'Chess, Checkers, Sputnik Catch and Torpedo Run with the remote' ] },
        { title: 'Easy to live with', text: 'Set it up once, then forget it’s there.', items: [
          'Sign in by scanning a code with your phone',
          'Your place shared with the website',
          'Offers its own updates',
          'A speed test, to see what your Wi-Fi can carry' ] },
      ],
    },
    shots: [
      ['shots/tv-show', 'A show', 'A show’s seasons and episodes'],
      ['shots/tv-film', 'A film', 'A film’s page with Play and More info'],
      ['shots/tv-player', 'Skip intro', 'The player offering Skip intro'],
      ['shots/tv-profiles', 'Who’s watching?', 'Choosing a profile when the app opens'],
    ],
    private: {
      title: 'A TV that doesn’t watch you back.',
      items: [
        ['Your password never touches the TV', 'Sign in by scanning a code and approving on your phone, from your home network. Only the server’s address is typed with the remote.'],
        ['Nothing of its own', 'The app holds no accounts and no media. It asks your server for what the website would show you, so every permission stays there.'],
        ['Profiles can only show less', 'Profiles are set up by an administrator on the website, never on the TV, so the remote can’t make Kids show more.'],
        ['Updates without telling on you', 'The update check goes to GitHub and sends nothing about you or your server.'],
      ],
    },
    with: {
      title: 'Everything on the sofa.',
      items: [
        ['movies', 'Every film and show in your video libraries, with your place shared.'],
        ['photos', 'Family photos and slideshows chosen for the TV.'],
        ['games', 'Board and arcade games played with the remote.'],
      ],
    },
    needs: {
      title: 'A TV that runs Android.',
      items: [
        ['A TV or a stick', 'Android TV, Google TV or Fire TV. Not the newest Fire TV sticks running Vega OS, and not Samsung or LG’s own systems.'],
        ['iSputnik.home with the video add-on', 'The TV shows what’s on your server, so video has to be set up there first.'],
        ['The Downloader app', 'Free, from the TV’s own store, to install iSputnik TV once while the store versions are on their way.'],
      ],
    },
    faq: {
      guides: [['the TV app guide', 'tv-app.md']],
      items: [
        ['Is it in the Play Store or Amazon’s store?', 'Not yet — it’s on the way. Until then it’s installed once with the free Downloader app, and offers its own updates after that.'],
        ['Does it work on Samsung or LG TVs?', 'No — they have their own systems. A Fire TV stick or a Google TV box plugged into them works.'],
        ['Can the kids switch to another profile?', 'Not if you set a PIN. Getting into Kids is free; getting out needs the PIN.'],
        ['What if the TV can’t play a file?', 'It switches to the server’s converted copy by itself. You may notice a pause of a few seconds.'],
      ],
    },
  },
];
