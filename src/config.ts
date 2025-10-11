export const siteConfig = {
  name: "Alireza Faraji",
  title: "Android & Multiplatform Developer",
  description: "Portfolio of Alireza Faraji - Building beautiful, cross-platform experiences with Kotlin and Jetpack Compose",
  accentColor: "#00C853",
  social: {
    email: "farajialireza82@gmail.com",
    linkedin: "https://www.linkedin.com/in/alireza-faraji-69946669/",
    github: "https://github.com/Farajialireza82",
  },
  aboutMe:
    "I've been coding since I was 14, starting with Java and evolving through Android development to become a cross-platform developer specializing in Kotlin Multiplatform and Jetpack Compose. What drives me? Solving real-world problems with beautiful, intuitive UIs. I thrive on the challenge of turning complex requirements into clean, maintainable code that actually makes people's lives easier. Whether it's building enterprise apps for 500+ daily users or crafting personal projects that push the boundaries of modern Android development, I'm all about creating experiences that just *work*. When I'm not coding, you'll find me training MMA, running, or hitting the trails for a hike. But honestly? One of my favorite parts of development is the people—collaborating with teammates, bouncing ideas around, and building something great together. That human element is what makes this career truly rewarding.",
  skills: [
    "Kotlin",
    "Jetpack Compose",
    "Kotlin Multiplatform (KMP)",
    "Android",
    "Clean Architecture",
    "MVVM & MVP",
    "Retrofit & Ktor",
    "Hilt & Dagger",
    "Coroutines & RxJava",
    "Room Database",
    "JUnit & MockK",
    "Git",
  ],
  projects: [
    {
      name: "Travelo",
      description:
        "A modern travel guide app showcasing Clean Architecture at its finest. Built with Jetpack Compose and offline-first architecture, featuring comprehensive testing (unit, UI, and integration tests), real-time TripAdvisor and OpenWeatherMap API integration, and GPS-powered location discovery. Because learning and building beautiful apps should go hand in hand.",
      link: "https://github.com/Farajialireza82/VacationApp",
      skills: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Room", "Retrofit", "Testing"],
    },
    {
      name: "BoxTimer Pro",
      description:
        "A cross-platform interval timer built with Kotlin Multiplatform for fighters and fitness enthusiasts. Features stunning Material 3 themes, glove-friendly UI design, customizable audio cues, and smart landscape mode for gym setups. Runs natively on Android and iOS from a single codebase—because your workout timer shouldn't be platform-locked.",
      link: "https://github.com/Farajialireza82/BoxTimerPro",
      skills: ["Kotlin Multiplatform", "Jetpack Compose", "iOS", "Android", "Material 3"],
    },
    {
      name: "Flex ERP/CRM",
      description:
        "Enterprise Android application serving 500+ daily users at Novaday Co. Led complete UI/UX redesign, implemented real-time maps, secure push notifications, in-app chat with media messaging, and Kanban-style workflows. Sole Android developer for over a year, later mentoring and onboarding new team members. Built with MVP architecture and a focus on performance, scalability, and thorough testing.",
      link: "",
      skills: ["Kotlin", "MVP", "RxJava", "Retrofit", "Dagger", "Firebase", "Enterprise"],
    },
  ],
  experience: [
    {
      company: "Novaday Co.",
      title: "Android Developer",
      dateRange: "Feb 2024 - May 2025",
      bullets: [
        "Took full ownership of Flex ERP/CRM app used by ~500 employees daily, ensuring reliable performance for high-volume enterprise operations across multiple departments",
        "Led complete UI/UX redesign in collaboration with design teams, modernizing legacy XML layouts into a polished, scalable interface",
        "Implemented critical features including real-time maps & geolocation, Firebase push notifications, in-app chat with media messaging, barcode scanning, and Kanban-style workflow UIs",
        "Applied Clean Architecture (MVP) with Kotlin, Coroutines, RxJava, Retrofit, and Dagger—ensuring scalable, maintainable code that stood up to enterprise demands",
        "Acted as sole Android developer for over a year, later leading hiring and onboarding of new Android developer, showcasing leadership and mentorship skills",
        "Optimized performance and reduced APK size through ProGuard and dependency management, migrating Gradle from 4.2 → 8.2",
        "Known for thorough edge-case testing before QA handoff, minimizing production bugs and maintaining high-quality standards",
        "Demonstrated end-to-end ownership of Android development lifecycle",
        "Delivered scalable, user-centric solutions in a fast-paced enterprise environment.",
        "Mentored and supported other developers, showcasing leadership and communication skills"
      ],
    },
  ],
  education: [
    {
      school: "Azad University",
      degree: "Bachelor of Computer Engineering",
      dateRange: "2022 - Present",
      achievements: [
        "Building on 8+ years of self-taught programming experience",
        "Started coding at 14 with Java, evolved through Android with Java and Kotlin",
        "Embraced Jetpack Compose early, now building cross-platform apps for Android, iOS, web, and desktop",
      ],
    },
  ],
};