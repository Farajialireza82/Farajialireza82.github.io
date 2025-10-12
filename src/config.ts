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
      name: "BoxTimer Pro",
      description:
        "A cross-platform interval timer built with Kotlin Multiplatform for fighters and fitness enthusiasts. Features stunning Material 3 themes, glove-friendly UI design, customizable audio cues, and smart landscape mode for gym setups. Runs natively on Android and iOS from a single codebase—because your workout timer shouldn't be platform-locked.",
      link: "https://github.com/Farajialireza82/BoxTimerPro",
      skills: ["Kotlin Multiplatform", "Jetpack Compose", "iOS", "Android", "Material 3"],
      slug: "boxtimer-pro",
      detailedDescription: "BoxTimer Pro is a professional-grade interval timer designed specifically for combat sports and fitness training. Built with Kotlin Multiplatform, it delivers a native experience on both Android and iOS while sharing 90% of the codebase.",
      features: [
        "Cross-platform compatibility (Android & iOS)",
        "Glove-friendly UI design for gym environments",
        "Customizable audio cues and vibration patterns",
        "Smart landscape mode for gym setups",
        "Material 3 design system implementation",
        "Local data persistence with SQLite",
        "Background timer functionality"
      ],
      screenshots: [
        "/images/boxtimer/1.png",
        "/images/boxtimer/2.png",
        "/images/boxtimer/3.png",
        "/images/boxtimer/4.jpg"
      ],
      githubReadme: "https://raw.githubusercontent.com/Farajialireza82/BoxTimerPro/main/README.md",
      technologies: ["Kotlin Multiplatform", "Jetpack Compose", "SwiftUI", "SQLite", "Ktor"],
      status: "In Development",
      duration: "2 months"
    },
    {
      name: "Travelo",
      description:
        "A modern travel guide app showcasing Clean Architecture at its finest. Built with Jetpack Compose and offline-first architecture, featuring comprehensive testing (unit, UI, and integration tests), real-time TripAdvisor and OpenWeatherMap API integration, and GPS-powered location discovery. Because learning and building beautiful apps should go hand in hand.",
      link: "https://github.com/Farajialireza82/VacationApp",
      skills: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Room", "Retrofit", "Testing"],
      slug: "travelo",
      detailedDescription: "Travelo is a comprehensive travel companion app that helps users discover and plan their trips with real-time data and offline capabilities. The app features a modern, intuitive interface built with Jetpack Compose and follows Clean Architecture principles for maintainability and testability.",
      features: [
        "Real-time weather integration with OpenWeatherMap API",
        "TripAdvisor API integration for local attractions and reviews",
        "GPS-powered location discovery and mapping",
        "Offline-first architecture with Room database",
        "Comprehensive testing suite (Unit, UI, Integration)",
        "Material Design 3 components and theming",
        "MVVM architecture with Hilt dependency injection"
      ],
      screenshots: [
        "/images/travelo/1.png",
        "/images/travelo/2.png",
        "/images/travelo/3.png",
        "/images/travelo/4.jpg"
      ],
      githubReadme: "https://raw.githubusercontent.com/Farajialireza82/VacationApp/main/README.md",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Room", "Retrofit", "JUnit", "MockK", "Espresso"],
      status: "Completed",
      duration: "3 months"
    }
  ],
  experience: [
    {
      company: "Novaday Co.",
      title: "Android Developer",
      dateRange: "Feb 2024 - May 2025",
      slug: "novaday-android-developer",
      bullets: [
    "Took full ownership of Flex ERP/CRM app used by ~500 employees daily, ensuring reliable performance and stability",
    "Led complete UI/UX redesign with design teams, modernizing legacy XML layouts into a scalable, modern interface",
    "Implemented key enterprise features: real-time maps & geolocation, Firebase push notifications, in-app chat with media messaging, barcode scanning, and Kanban-style workflow UIs",
    "Applied Clean Architecture (MVP) using Kotlin, Coroutines, RxJava, Retrofit, and Dagger for maintainable, scalable code",
    "Acted as sole Android developer for over a year, later leading hiring and onboarding of new Android developer",
    "Optimized performance and reduced APK size via ProGuard, dependency cleanup, and Gradle migration (4.2 → 8.2)",
    "Conducted thorough edge-case testing prior to QA handoff, minimizing production bugs",
    "Managed end-to-end Android development lifecycle from planning to deployment",
    "Collaborated with cross-functional teams to deliver user-centric enterprise solutions",
    "Mentored and supported other developers, demonstrating leadership and communication skills"
  ],
keyAchievements: [
    "Modernized and relaunched a mission-critical legacy ERP/CRM Android application used by 500+ employees daily, significantly improving usability and scalability",
    "Reduced app crash rate by 85% through architecture refactoring, defensive coding, and comprehensive testing—resulting in vastly improved stability",
    "Boosted overall app performance by 40% by optimizing network calls, database operations, and UI rendering",
    "Delivered 15+ major features and dozens of enhancements on time and within scope, directly supporting business growth and operational efficiency",
    "Migrated the entire project from Gradle 4.2 to 8.2, unlocking modern tooling, build speed improvements, and future maintainability",
    "Reduced APK size and build time through ProGuard configuration and dependency optimization, improving installation speed for users in the field",
    "Successfully transitioned from sole Android developer to team lead—hiring, mentoring, and onboarding new Android talent to scale the team",
    "Introduced and enforced clean architecture best practices (MVP, modularization), resulting in a more maintainable and testable codebase",
    "Improved development and release process with edge-case testing protocols, minimizing post-release bugs and reducing QA cycles",
    "Elevated user satisfaction through a complete UI/UX redesign, transforming a legacy interface into a modern, intuitive experience"
  ],
      detailedDescription: "At Novaday Co., I served as the primary Android developer for a mission-critical enterprise application that supports the daily operations of 500+ employees. This role required deep technical expertise, strong leadership skills, and the ability to work independently while collaborating effectively with cross-functional teams.",
      technologies: ["Kotlin", "MVP Architecture", "RxJava", "Retrofit", "Dagger", "Firebase", "Google Maps", "Room Database", "Gradle"],
      companyPhotos: [
        "/images/flex/1.jpg",
        "/images/flex/2.jpg",
        "/images/flex/5.jpg",
        "/images/flex/4.jpg"
      ],
      companyDescription: "Novaday Co. is a leading technology company specializing in enterprise solutions and business process automation. The company serves clients across various industries, providing innovative software solutions that streamline operations and improve efficiency.",
      teamSize: "15+ developers",
      industry: "Enterprise Software",
      location: "Remote/On-site"
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
  recommendations: [
    {
      id: "rec-1",
      name: "Milad Khosravi",
      title: "Senior Backend Developer",
      company: "Novaday Co.",
      avatar: "/images/recommendations/milad-khosravi.jpg",
      text: "I had the pleasure of working with Alireza on several Android projects, and I can confidently say he is an exceptional Kotlin developer. His deep understanding of Android architecture, Jetpack components, and modern development practices makes him a standout engineer.",
      date: "February 2025",
      connection: "Former Colleague"
    },
    {
      id: "rec-2", 
      name: "Arman Mohammadi",
      title: "Product Manager",
      company: "Novaday Co.",
      avatar: "/images/recommendations/arman-mohammadi.jpeg",
      text: "I had the pleasure of working with Alireza, an incredibly dedicated Android developer, who consistently delivered high-quality implementations of new product features. During our time together, he successfully redeveloped an ERP application (Flex), bringing substantial improvements to its user interface, user experience, infrastructure, and architecture. Alireza is focused, patient, hardworking, and kind, making collaboration with him truly enjoyable. He’s always eager to learn and grow within his field. I highly recommend him.",
      date: "November 2024",
      connection: "Former Colleague"
    }
  ],
};