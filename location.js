document.addEventListener('DOMContentLoaded', function() {
    const locationList = document.getElementById('locationList');
    const locations = [
        { value: "SSR International Airport", text: "Mauritius Airport" },
        { value: "Anantara Iko Mauritius Resort & Villas", text: "Blue Bay" },
        { value: "Ambre Resort & Spa", text: "Palmar" },
        { value: "Aanari Hotel & Spa", text: "Flic en Flac" },
        { value: "Angsana Balaclava", text: "Turtle Bay" },
        { value: "Anelia Beach Resort & Spa", text: "Flic en Flac" },
        { value: "Baystone Boutique hotel", text: "Pointe aux Canonniers" },
        { value: "Be Cosy Apart Hotel", text: "Trou aux Biches" },
        { value: "Canonnier Beachcomber Resort & Spa", text: "Pointe aux Canonniers" },
        { value: "Constance Belle Mare Plage", text: "Belle Mare" },
        { value: "Constance Le Prince Maurice", text: "Belle Mare" },
        { value: "Calodyne Sur Mer", text: "Calodyne" },
        { value: "Casa Florida Hotel & Spa", text: "Pereybere - Grand Baie" },
        { value: "Club Med La Pointe aux Canonniers", text: "Pointe aux Canonniers - Grand Baie" },
        { value: "Club Med La Plantation of Albion", text: "Albion" },
        { value: "Coin de Mire Attitude Hotel", text: "Bain Bœuf" },
        { value: "Cocotiers hotel", text: "Tombeau Bay" },
        { value: "Coral Azur Beach Resort", text: "Trou aux Biches" },
        { value: "Dinarobin Hotel Golf & Spa", text: "Le Morne-Brabant" },
        { value: "Emeraude Beach Attitude Hotel", text: "Belle Mare" },
        { value: "Four Seasons Resort Mauritius at Anahita", text: "Beau Champ" },
        { value: "Friday Attitude", text: "Trou d’Eau Douce" },
        { value: "Gold Crest Business Hotel", text: "Quatre Bornes" },
        { value: "Gold nest hotel", text: "Quatre Bornes" },
        { value: "Gold Beach Resort", text: "Flic-en-Flac" },
        { value: "Hibiscus Beach Resort & Spa", text: "Grand Baie" },
        { value: "Hotel des Deux Mondes", text: "Mont Choisy" },
        { value: "Hotel 20 Degree Sud", text: "Grand Baie" },
        { value: "Hotel Pearl Beach Resort & Spa", text: "Hotel Pearl Beach Resort & Spa" },
        { value: "Hotel Tamarin", text: "Tamarin" },
        { value: "Hotel Outrigger Mauritius Beach Resort", text: "Bel Ombre" },
        { value: "Hilton Mauritius Resort & Spa", text: "Flic-en-Flac" },
        { value: "Hotel Veranda Palmar", text: "Belle Mare" },
        { value: "Hotel Tropical Attitude", text: "Trou d’Eau Douce" },
        { value: "Hotel Shanti Maurice", text: "Saint-Félix" },
        { value: "Hotel Preskil Beach Resort", text: "Mahébourg" },
        { value: "Hotel Le Tamassa", text: "Bel Ombre" },
        { value: "Hotel So Mauritius", text: "Bel Ombre" },
        { value: "Heritage Awali Golf & Spa Resort", text: "Bel Ombre" },
        { value: "Heritage Le Telfair Golf & Spa Resort", text: "Bel Ombre" },
        { value: "Hennessy Park Hotel", text: "Ebene" },
        { value: "Holiday Inn Mauritius Airport", text: "Mon Tresor" },
        { value: "Intercontinental Mauritius Hotel", text: "Balaclava" },
        { value: "Jalsa Beach Hotel & Spa", text: "Poste La Fayette" },
        { value: "LUX Grand Gaube", text: "Grand Gaube" },
        { value: "La Maison D’été", text: "Poste Lafayette" },
        { value: "Le Mauricia Beachcomber Resort & Spa", text: "Grand Baie" },
        { value: "Le Meridien", text: "Pointe aux Piments" },
        { value: "Le Palmiste Resort & Spa", text: "Trou aux Biches" },
        { value: "Le Victoria Hotel", text: "Pointe aux Piments" },
        { value: "La Pirogue Resort & Spa", text: "Flic-en-Flac" },
        { value: "Labourdonnais Waterfront Hotel", text: "Port Louis" },
        { value: "Le Suffren Hotel & Marina", text: "Port Louis" },
        { value: "La Palmeraie Boutique Hotel", text: "Palmar" },
        { value: "Laguna Beach Hotel & Spa", text: "Grand River South East" },
        { value: "Le Surcouf Hotel & Spa", text: "Belle Mare" },
        { value: "Long Beach Golf & Spa Resort", text: "Belle Mare" },
        { value: "LUX Le Morne", text: "Le Morne-brabant" },
        { value: "LUX Belle Mare", text: "Belle Mare" },
        { value: "LUX Grand Baie", text: "Grand Baie" },
        { value: "Le Peninsula Bay Beach Resort", text: "Blue Bay" },
        { value: "Maradiva Villas Resort & Spa", text: "Tamarin" },
        { value: "Maritim Resort & Spa Hotel", text: "Balaclava" },
        { value: "Merville Beach Hotel", text: "Grand Baie" },
        { value: "One & Only Le Saint Géran Hotel", text: "Belle Mare" },
        { value: "Ocean V Hotel", text: "Pereybere" },
        { value: "Paradise Cove Boutique Hotel 5 Stars", text: "Grand Baie" },
        { value: "Paradis Hotel & Golf Club", text: "Le Morne-Brabant" },
        { value: "Paradis Beachcomber Golf Resort & Spa", text: "Le Morne-brabant" },
        { value: "Royal Palm Beachcomber Hotel", text: "Grand Baie" },
        { value: "Recif Attitude Hotel", text: "Pointe aux Piments" },
        { value: "Radisson Blu Azuri Resort & Spa", text: "" },
        { value: "Radisson Blu Lafayette Resort & Spa", text: "Poste Lafayette" },
        { value: "Sakoa Boutik Hotel Mauritius", text: "Trou aux Biches" },
        { value: "Sofitel Mauritius L’Impérial Hotel", text: "Flic en Flac" },
        { value: "Sands Suites Resort & Spa Hotel", text: "Flic en Flac" },
        { value: "Sugar Beach Golf & Spa Resort", text: "Flic-en-Flac" },
        { value: "Sunset Reef Resort", text: "" },
        { value: "Shangri-La’s Hotel Le Touessrok Resort", text: "Trou d’Eau Douce" },
        { value: "Shandrani Beachcomber", text: "Blue Bay" },
        { value: "Trou Aux Biches Resort & Spa", text: "Grand Baie" },
        { value: "The Westin Turtle Bay Resort & Spa", text: "Turtle Bay" },
        { value: "The Ravenala Attitude Hotel", text: "Balaclava" },
        { value: "The Residence Mauritius Hotel", text: "" },
        { value: "Tamarina Golf & Spa Boutique Hotel", text: "Tamarin" },
        { value: "The St. Regis Mauritius Resort", text: "Le Morne-Brabant" },
        { value: "The Oberoi Mauritius Hotel", text: "Tortoise Bay" },
        { value: "Veranda Pointe aux Biches Hotel", text: "Pointe-aux-Piments" },
        { value: "Veranda Grand Baie Hotel & Spa", text: "Grand Baie" },
        { value: "Veranda Paul & Virginie Hotel", text: "Grand Gaube" },
        { value: "Zilwa Attitude Hotel", text: "Grand Gaube" },
        { value: "", text: "Flic en Flac" },
        { value: "", text: "Flacq" },
        { value: "", text: "Mahebourg" },
        { value: "", text: "Grand Gaube" },
        { value: "", text: "La Fayette" },
        { value: "", text: "Balaclava" },
        { value: "", text: "Blue Bay" },
        { value: "", text: "Tamarin" },
        { value: "", text: "Le Morne" },
        { value: "", text: "Rose-hill" },
        { value: "", text: "Grand Baie" },
        { value: "", text: "Quatre-Bornes" },
        { value: "", text: "Ebene" },
        { value: "", text: "Belle Mare" },
        { value: "", text: "Cap Malheureux" },
        { value: "", text: "Bel Ombre" },
        { value: "", text: "Trou d'Eau Douce" },
        { value: "", text: "Albion" },
        { value: "", text: "Trou aux Biches" },
        { value: "", text: "Curepipe" },
        { value: "", text: "Pereybere" },
        { value: "", text: "Chamarel" },
        { value: "", text: "Goodlands" },
        { value: "", text: "Pointe aux Cannoniers" },
        { value: "", text: "Moka" },
        { value: "", text: "Mont Choisy" }
    ];

    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location.value;
        option.textContent = location.text;
        locationList.appendChild(option);
    });
});