📌 Progetto: Portale di Guide Interattive per Videogiochi
Un'applicazione web che fornisce guide dettagliate per videogiochi, con mappe interattive, database di oggetti e tutorial video.

🛠️ Tecnologie utilizzate

Frontend:
Next.js → Framework React per il frontend
Mapbox GL → Per la visualizzazione di mappe interattive
Three.js → Per aggiungere elementi 3D
Tailwind CSS → Per lo stile e la gestione UI con Atomic Design
React Query → Per la gestione delle chiamate API in modo efficiente

Backend:
Node.js + Express → API REST per comunicare con il frontend
Prisma ORM → Per la gestione del database con un'interfaccia più semplice
PostgreSQL → Database relazionale per gestire utenti, guide e mappe

🧩 Struttura logica e funzionale

🔹 1. Autenticazione e gestione utenti
Registrazione/Login con email e password
Possibile supporto per OAuth (Google, Discord)
Ruoli utente (admin, editor, utente normale)

🔹 2. Mappe Interattive
Mapbox GL per mostrare mappe personalizzate con:
Punti di interesse (POI) (NPC, loot, zone di spawn)
Percorsi e itinerari disegnabili dagli utenti
Database con coordinate e dettagli di ogni posizione

🔹 3. Database degli oggetti
Tabelle per:
Oggetti, armi, equipaggiamento
NPC, boss e quest
Zone e dungeon
Possibilità di aggiungere/modificare dati da un'interfaccia admin

🔹 4. Guide e tutorial video
Sezione dedicata ai video tutorial su meccaniche di gioco
Categorie per ogni gioco con filtri avanzati
Possibilità di integrare YouTube/Twitch API per mostrare contenuti live

🔹 5. API REST per comunicazione frontend-backend
CRUD per utenti, oggetti e guide con Prisma + Express
Endpoint per:
Ricerca oggetti/zone
Gestione utenti e autenticazione
Recupero dati da PostgreSQL

🔹 6. UI modulare con Atomic Design
Componenti riutilizzabili (es. bottoni, card, modali)
Gestione dinamica dei dati con React Query
Dashboard admin per gestire contenuti e database
