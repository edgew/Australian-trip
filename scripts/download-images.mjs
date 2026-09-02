import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const images = {
  'city-arrival': 'Flinders_Street_railway_station', 'st-patricks': "St_Patrick's_Cathedral,_Melbourne", qvm: 'Queen_Victoria_Market', hosier: 'Hosier_Lane', 'gardens-ngv': 'Royal_Botanic_Gardens_Victoria', fitzroy: 'Fitzroy,_Victoria', yarravalley: 'Yarra_Valley', healesville: 'Healesville_Sanctuary', balloon: 'Yarra_Valley', 'tidal-river': 'Tidal_River,_Victoria', squeaky: 'Squeaky_Beach', lilly: 'Wilsons_Promontory_National_Park', bigdrift: 'Wilsons_Promontory_National_Park', tonguepoint: 'Tongue_Point_(Victoria)', nobbies: 'The_Nobbies,_Victoria', penguin: 'Penguin_Parade', woolamai: 'Cape_Woolamai', 'hot-springs': 'Peninsula_Hot_Springs', pointnepean: 'Point_Nepean_National_Park', ferry: 'Searoad_Ferries', surfcoast: 'Bells_Beach,_Victoria', splitpoint: 'Split_Point_Lighthouse', erskine: 'Erskine_Falls', kennett: 'Kennett_River', maits: "Maits'_Rest", gibson: 'Gibson_Steps', apostles: 'Twelve_Apostles_(Victoria)', lochard: 'Loch_Ard_Gorge', londonbridge: 'London_Bridge_(Victoria)', bayislands: 'Bay_of_Islands_Coastal_Park', 'learn-to-fly': 'Moorabbin_Airport', 'ngv-library': 'National_Gallery_of_Victoria', departure: 'Melbourne_Airport'
};
const destination = new URL('../assets/', import.meta.url);
await mkdir(destination, { recursive: true });
const credits = {};

for (const [id, title] of Object.entries(images)) {
  const page = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  try {
    const summary = await fetch(page, { headers: { 'User-Agent': 'VictoriaWildLoop/1.0 (travel-planning)' } });
    if (!summary.ok) throw new Error(`summary HTTP ${summary.status}`);
    const payload = await summary.json();
    const source = payload.thumbnail?.source || payload.originalimage?.source;
    if (!source) throw new Error('no lead image');
    const image = await fetch(source, { headers: { 'User-Agent': 'VictoriaWildLoop/1.0 (travel-planning)' } });
    if (!image.ok) throw new Error(`image HTTP ${image.status}`);
    await writeFile(new URL(`${id}.jpg`, destination), Buffer.from(await image.arrayBuffer()));
    credits[id] = { title, page: payload.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`, image: source };
    console.log(`OK ${id}`);
  } catch (error) {
    console.warn(`SKIP ${id}: ${error.message}`);
  }
}
await writeFile(new URL('image-sources.json', destination), `${JSON.stringify(credits, null, 2)}\n`);
