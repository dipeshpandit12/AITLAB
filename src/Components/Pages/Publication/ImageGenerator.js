const imageTopics = {
    "autonomous": { image: "/img/publication/autonomous_vehicles.jpg", synonyms: ["self-driving", "automated", "driverless", "robotic", "unmanned"] },
    "traffic": { image: "/img/publication/ai_traffic_management.jpg", synonyms: ["congestion", "mobility", "vehicular", "transport", "flow"] },
    "smart": { image: "/img/publication/smart_traffic_lights.jpg", synonyms: ["intelligent", "connected", "adaptive", "dynamic", "innovative"] },
    "pedestrian": { image: "/img/publication/pedestrian_detection.jpg", synonyms: ["walking", "bystander", "individual", "traveler", "crossing"] },
    "collision": { image: "/img/publication/collision_prevention.jpg", synonyms: ["accident", "impact", "crash", "incident", "smash"] },
    "safety": { image: "/img/publication/road_safety.jpg", synonyms: ["protection", "security", "well-being", "safeguard", "defense"] },
    "highways": { image: "/img/publication/smart_highways.jpg", synonyms: ["motorway", "expressway", "road", "freeway", "route"] },
    "drone": { image: "/img/publication/drone_traffic_surveillance.jpg", synonyms: ["UAV", "aircraft", "quadrotor", "flying robot", "drone technology"] },
    "public transport": { image: "/img/publication/ai_public_transport.jpg", synonyms: ["bus", "metro", "transit", "train", "commuter"] },
    "electric": { image: "/img/publication/electric_vehicle_infrastructure.jpg", synonyms: ["EV", "battery", "sustainable", "hybrid", "eco-friendly"] },
    "flow": { image: "/img/publication/traffic_flow_optimization.jpg", synonyms: ["movement", "capacity", "efficiency", "stream", "pattern"] },
    "accident": { image: "/img/publication/accident_risk_prediction.jpg", synonyms: ["mishap", "disaster", "hazard", "incident", "catastrophe"] },
    "parking": { image: "/img/publication/smart_parking_systems.jpg", synonyms: ["garage", "lot", "spot", "bay", "stall"] },
    "freight": { image: "/img/publication/freight_transport.jpg", synonyms: ["cargo", "shipment", "delivery", "goods", "transportation"] },
    "vehicle communication": { image: "/img/publication/vehicle_to_vehicle_communication.jpg", synonyms: ["V2V", "connected vehicles", "car communication", "networked vehicles", "interaction"] },
    "congestion": { image: "/img/publication/traffic_congestion.jpg", synonyms: ["traffic jam", "delay", "gridlock", "blockage", "clogging"] },
    "sensors": { image: "/img/publication/transportation_safety_sensors.jpg", synonyms: ["detector", "monitor", "device", "measurement", "input device"] },
    "urban mobility": { image: "/img/publication/urban_mobility.jpg", synonyms: ["city travel", "public mobility", "transportation", "urban transport", "commute"] },
    "road monitoring": { image: "/img/publication/road_condition_monitoring.jpg", synonyms: ["pavement", "condition assessment", "road inspection", "infrastructure monitoring", "road analysis"] },
    "emergency": { image: "/img/publication/emergency_response.jpg", synonyms: ["rescue", "aid", "response", "disaster response", "safety response"] }
};



// Common stop words to exclude from title processing
const stopWords = ["in", "the", "and", "of", "to", "for", "on", "a", "an"];

// Array of default images
const defaultImages = [
    "/img/publication/default1.jpg",
    "/img/publication/default2.jpg",
    "/img/publication/default3.jpg",
    "/img/publication/default4.jpg",
    "/img/publication/default5.jpg"
];

// Function to preprocess the title by removing stop words and extracting keywords
function extractKeywords(title) {
    const words = title.toLowerCase().split(' ');
    return words.filter(word => !stopWords.includes(word));
}

// Function to get a random image from the default images
function getRandomDefaultImage() {
    const randomIndex = Math.floor(Math.random() * defaultImages.length);
    return defaultImages[randomIndex];
}

// Main image generator function
export function imageGenerator(title) {
    const keywords = extractKeywords(title);
    let bestMatch = { imagePath: "/img/publication/default.jpg", score: 0 }; // Default image

    // Check for matching keywords and their synonyms, calculate the match score
    for (let [topic, data] of Object.entries(imageTopics)) {
        let matchScore = 0;

        // Check if the title has keywords or synonyms related to the topic
        keywords.forEach(keyword => {
            if (topic.toLowerCase().includes(keyword)) {
                matchScore++;
            } else if (data.synonyms.some(synonym => synonym.includes(keyword))) {
                matchScore++;
            }
        });

        // Update if current topic has a higher match score
        if (matchScore > bestMatch.score) {
            bestMatch = { imagePath: data.image, score: matchScore };
        }
    }

    // Return the best-matching image path or a random default image if no matches found
    return bestMatch.score > 0 ? bestMatch.imagePath : getRandomDefaultImage();
}
