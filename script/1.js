document.addEventListener("DOMContentLoaded", function () {
    // Basisfarben als Array
    const baseColors = [
        { name: "green", rgb: "rgb(0, 255, 0)" },
        { name: "blue", rgb: "rgb(0, 0, 255)" },
        { name: "purple", rgb: "rgb(128, 0, 128)" },
        { name: "pink", rgb: "rgb(255, 192, 203)" },
        { name: "red", rgb: "rgb(255, 0, 0)" },
        { name: "orange", rgb: "rgb(255, 165, 0)" },
        { name: "yellow", rgb: "rgb(255, 255, 0)" }
    ];

    // Funktion, um eine zufällige Grundfarbe auszuwählen
    function getRandomBaseColor() {
        const randomIndex = Math.floor(Math.random() * baseColors.length);
        return baseColors[randomIndex];
    }

    // Hilfsfunktion, um aus einer Basisfarbe eine zufällige Variation zu erzeugen
    function getRandomColorVariation(baseColor) {
        const baseRGB = baseColor.match(/\d+/g).map(Number);
        const variation = baseRGB.map(c => {
            // Offset zwischen -20 und +180 (entspricht ca. ±100 im Mittel)
            const offset = Math.floor(Math.random() * 200) - 20;
            const newColor = Math.min(255, Math.max(0, c + offset));
            return newColor;
        });
        return `rgb(${variation[0]}, ${variation[1]}, ${variation[2]})`;
    }

    const colorDescriptions = {
        green: `
            <h2>Grüngedanken: Natur, Wachstum und Harmonie</h2>
            <p>Grün ist eine Farbe, die sofort mit der Natur und ihrer beruhigenden Wirkung assoziiert wird. Sie symbolisiert Wachstum, Erneuerung und Balance. Wenn wir an grüne Wälder, saftige Wiesen oder den Frühling denken, so löst das eine tiefe Verbindung zur Erde aus. Grüntöne vermitteln ein Gefühl der Ruhe und fördern eine Atmosphäre des Wohlbefindens. Es ist keine Überraschung, dass viele Gesundheitseinrichtungen und Arbeitsräume grüne Akzente setzen, um eine Atmosphäre der Entspannung und des inneren Friedens zu schaffen.</p>
            <p>Grün wird auch oft mit Heilung in Verbindung gebracht. Es ist die Farbe des Lebens und der Erneuerung – die Natur ist im ständigen Kreislauf von Wachstum und Verfall, was diese Farbe zu einem kraftvollen Symbol für kontinuierliche Veränderung und Fortschritt macht. Ob als frisches Blattgrün oder in tieferen, smaragdgrünen Tönen – grüne Farben helfen dabei, die Sinne zu beruhigen, den Blutdruck zu senken und den Geist zu beruhigen. In vielen Kulturen gilt Grün als Farbe des Lebens, des Gleichgewichts und der Hoffnung.</p>
        `,
        blue: `
            <h2>Blaue Ruhe: Vertrauen, Stabilität und Klarheit</h2>
            <p>Blau ist die Farbe der Ruhe und der Weite. Es erinnert an den Himmel, der in seiner Unendlichkeit auf uns herabblickt, und das tiefe, geheimnisvolle Meer. Diese Farbe ist untrennbar mit Konzepten wie Vertrauen, Stabilität und Klarheit verbunden. In einer Welt, die oft von Hektik und Stress geprägt ist, hat Blau die bemerkenswerte Fähigkeit, zu beruhigen und zu entspannen.</p>
            <p>Blau hat auch eine starke psychologische Wirkung: Es hilft dabei, das Gefühl von Sicherheit und Gelassenheit zu verstärken. In vielen sozialen Kontexten wird Blau als Farbe der Autorität und Zuverlässigkeit wahrgenommen, weshalb es in der Geschäftswelt und in professionellen Kontexten weit verbreitet ist. Der Einsatz von Blau kann das Gefühl von Vertrauen stärken und eine Atmosphäre des friedlichen Miteinanders schaffen. Blauer Himmel und Ozean laden zur Reflexion ein und regen zu einem klaren, fokussierten Denken an.</p>
        `,
        purple: `
            <h2>Lila Mystik: Luxus, Kreativität und Ambition</h2>
            <p>Lila, eine Mischung aus Blau und Rot, ist eine Farbe, die tief mit der Vorstellung von Luxus und Eleganz verbunden ist. Schon in der Antike war Purpur eine Farbe, die den Königen und Kaisern vorbehalten war, da der Farbstoff teuer und schwierig zu gewinnen war. Lila steht nicht nur für Reichtum und Macht, sondern auch für kreative Visionen und tiefgehende Ambitionen.</p>
            <p>Psychologisch wird Lila oft mit der Förderung von Kreativität und spiritueller Erhebung in Verbindung gebracht. Es ist eine Farbe, die den Geist anregt und eine Atmosphäre des Nachdenkens schafft. In künstlerischen und literarischen Kontexten wird Lila oft genutzt, um mystische oder tiefgründige Themen zu vermitteln. Diese Farbe inspiriert zu Träumen und Fantasien und gibt dem Betrachter das Gefühl, dass alles möglich ist. Lila ist die Farbe der Kunst, der Wissenschaft und der Spiritualität, die oft ein Gleichgewicht zwischen rationalem Denken und intuitiver Weisheit fordert.</p>
        `,
        pink: `
            <h2>Pinke Wärme: Mitgefühl, Verspieltheit und Zärtlichkeit</h2>
            <p>Pink ist eine Farbe, die sofort mit Wärme und Herzlichkeit verbunden wird. Sie strahlt eine freundliche, einladende Atmosphäre aus und symbolisiert Liebe, Fürsorge und Mitgefühl. Pink ist eine weiche, aber gleichzeitig lebendige Farbe, die das Gefühl von Geborgenheit und Zuneigung hervorruft. Sie wird oft in Kontexten verwendet, die mit Fürsorge, Familie und Freundschaft zu tun haben.</p>
            <p>Ob als sanftes Rosa oder ein kräftiges Magenta, Pink spricht oft die eher verspielten und romantischen Aspekte des Lebens an. Es ist die Farbe der Empathie, des emotionalen Ausdrucks und der unbeschwerten Freude. Pink kann auch als Symbol für positive Energie und Optimismus angesehen werden, da es ein Gefühl der Freude und des Wohlbefindens in den Raum bringt. Diese Farbe wird oft in Marketing- und Designkonzepten verwendet, die positive, leicht zugängliche und herzliche Botschaften vermitteln möchten.</p>
        `,
        red: `
            <h2>Rote Leidenschaft: Energie, Liebe und Intensität</h2>
            <p>Rot ist eine kraftvolle, energische Farbe, die sowohl Leidenschaft als auch Gefahr symbolisieren kann. Sie zieht die Aufmerksamkeit auf sich und vermittelt ein Gefühl von Dringlichkeit und Wichtigkeit. Rot ist untrennbar mit Konzepten wie Liebe, Energie und Wille verbunden. Es ist die Farbe der intensiven Gefühle – von tiefster Liebe bis hin zu wütender Entschlossenheit.</p>
            <p>Psychologisch wirkt Rot auf das Nervensystem und kann den Puls beschleunigen, was sie zu einer der intensivsten und auffälligsten Farben macht. Es ist die Farbe der Aktion und des Durchsetzungsvermögens. Rote Akzente in einem Raum oder einem Outfit können das Selbstbewusstsein stärken und die Atmosphäre dynamisch gestalten. Diese Farbe wird oft verwendet, um Energie zu verleihen und eine leidenschaftliche, entschlossene Stimmung zu erzeugen. In vielen Kulturen steht Rot für Leben und Vitalität – es ist die Farbe, die uns zu Handlungen und Veränderungen motiviert.</p>
        `,
        orange: `
            <h2>Orange – Energie und Begeisterung</h2>
            <p>Orange ist eine fröhliche und energetische Farbe, die oft mit Kreativität, Abenteuer und positiver Energie assoziiert wird. Sie vereint die Lebendigkeit von Rot und die Freude von Gelb und ist damit eine Farbe, die spontan und ansteckend wirkt. Orange ist die Farbe des Herbstes, der Ernte und der goldenen Sonnenuntergänge, die den Tag in ein warmes Licht tauchen.</p>
            <p>Psychologisch gesehen ist Orange eine Farbe, die Kommunikation und Zusammenarbeit fördert. Sie ist anregend, aber nicht so intensiv wie Rot, was sie zu einer idealen Farbe für kreative Räume und Teamumgebungen macht. Orange wird häufig verwendet, um ein Gefühl von Begeisterung und Abenteuerlust zu wecken, ohne dabei zu überwältigen. Sie ist ideal für Werbung, die Energie und den Wunsch nach Veränderung vermittelt. In der Farbpsychologie wird Orange auch als eine der einladendsten Farben angesehen, die eine warme und optimistische Atmosphäre schafft.</p>
        `,
        yellow: `
            <h2>Gelbe Freude: Klarheit, Optimismus und Glück</h2>
            <p>Gelb ist die Farbe des Lichts und des Sonnenstrahls. Sie steht für Klarheit, Optimismus und Freude. Gelb ist hell, lebendig und kann sofort ein Gefühl von Glück und Energie vermitteln. Wenn wir an Gelb denken, denken wir an die Sonne, die den Tag erhellt, und an blühende Blumen, die den Frühling ankündigen. Diese Farbe ist untrennbar mit positiven Gefühlen wie Zufriedenheit, Wohlstand und Fröhlichkeit verbunden.</p>
            <p>Gelb hat eine anregende Wirkung auf den Geist und fördert eine klare, positive Denkweise. Sie wird häufig in Umgebungen verwendet, in denen Kreativität und Innovation gefördert werden sollen. Gelb ist ideal für Räume, die Vitalität und Lebensfreude ausstrahlen. Diese Farbe ist auch mit einem hohen Maß an Energie und Aktivität verbunden, da sie eine sofortige Stimmungserhöhung bewirken kann. Gelb steht für den Frühling, das neue Leben und den Beginn von etwas Großem und Aufregendem. Es ist die Farbe der Hoffnung und des Glücks.</p>
        `
    };
    
// Zufällige Grundfarbe auswählen
const randomBaseColor = getRandomBaseColor();

// Container für die Farbbeschreibung erstellen
const descriptionContainer = document.createElement("div");
descriptionContainer.id = "color-description";

// Detaillierte Beschreibung anhand der ausgewählten Farbe abrufen
const descriptionText = colorDescriptions[randomBaseColor.name] || "Keine Beschreibung verfügbar.";

// Beschreibung als HTML einfügen
descriptionContainer.innerHTML = descriptionText;

// Den Beschreibungscontainer am Anfang des Body einfügen
document.body.insertBefore(descriptionContainer, document.body.lastChild);

    // Die MovingObject-Klasse, die die animierten Objekte steuert
    class MovingObject {
        constructor(element, centerX, centerY, maxDistance, baseColor) {
            this.element = element;
            this.centerX = centerX;
            this.centerY = centerY;
            this.maxDistance = maxDistance;
            this.maxStep = 1;
            this.directionX = (Math.random() - 0.5) * 2;
            this.directionY = (Math.random() - 0.5) * 2;
            this.posX = centerX;
            this.posY = centerY;

            this.element.style.position = "absolute";
            this.element.style.left = `${centerX}px`;
            this.element.style.top = `${centerY}px`;
            this.element.style.backgroundColor = this.getColorVariations(baseColor.rgb);  // Farbvariationen anwenden
        }

        // Erzeugt verschiedene Farbvariationen der Grundfarbe
        getColorVariations(baseColor) {
            const baseRGB = baseColor.match(/\d+/g).map(Number);
            const variations = [];

            for (let i = 0; i < 10; i++) {  // Mehr Variationen erzeugen
                const variation = baseRGB.map(c => {
                    const offset = Math.floor(Math.random() * 200) - 20;
                    const newColor = Math.min(255, Math.max(0, c + offset));
                    return newColor;
                });
                variations.push(`rgb(${variation[0]}, ${variation[1]}, ${variation[2]})`);
            }

            // Zufällige Variation auswählen
            const randomVariationIndex = Math.floor(Math.random() * variations.length);
            return variations[randomVariationIndex];
        }

        move() {
            this.posX += this.directionX * this.maxStep;
            this.posY += this.directionY * this.maxStep;
            
            const deltaX = this.posX - this.centerX;
            const deltaY = this.posY - this.centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            if (distance > this.maxDistance) {
                this.posX -= this.directionX * this.maxStep;
                this.posY -= this.directionY * this.maxStep;
                this.changeDirection();
            }
            
            this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
        }

        changeDirection() {
            this.directionX = (Math.random() - 0.5) * 2;
            this.directionY = (Math.random() - 0.5) * 2;
        }

        start() {
            setInterval(() => this.move(), 10);
            setInterval(() => this.changeDirection(), Math.random() * 1500 + 500);
        }
    }

    // Erstelle und füge die animierten Objekte hinzu
    const bubble = document.createElement("div");
    bubble.className = "movingObject";
    const mother = document.getElementById("movingObject-container");
    for (let i = 0; i < 100; i++) {
        mother.appendChild(bubble.cloneNode(true));   
    }

    const objects = document.querySelectorAll(".movingObject");
    objects.forEach(obj => {
        const mover = new MovingObject(obj, window.innerWidth / 4-10, 200, 300, randomBaseColor);
        mover.start();
    });
});

// Initialer Zustand für den Blur
let isBlurred = true;

// Event Listener für das Drücken der Taste
document.addEventListener('keydown', function(event) {
    // Überprüfe, ob die 'B'-Taste gedrückt wurde
    if (event.key.toLowerCase() === 'b') {
        // Toggle zwischen Blur und Normalzustand
        if (isBlurred) {
            document.getElementById('movingObject-container').style.filter = 'blur(0)';
        } else {
            document.getElementById('movingObject-container').style.filter = 'blur(50px)';
        }
        // Ändere den Zustand
        isBlurred = !isBlurred;
    }
});
