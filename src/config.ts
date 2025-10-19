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
  aboutMe: [
    "I've been coding since I was 14, starting with Java and evolving through Android development to become a cross-platform developer specializing in Kotlin Multiplatform and Jetpack Compose. What drives me? Solving real-world problems with beautiful, intuitive UIs.",
    "I thrive on the challenge of turning complex requirements into clean, maintainable code that actually makes people's lives easier. Whether it's building enterprise apps for 500+ daily users or crafting personal projects that push the boundaries of modern Android development, I'm all about creating experiences that just *work*.",
    "When I'm not coding, you'll find me training MMA, running, or hitting the trails for a hike. But honestly? One of my favorite parts of development is the people, collaborating with teammates, bouncing ideas around, and building something great together. That human element is what makes this career truly rewarding."
  ],
  skills: {
    hardSkills: {
      "Mobile Development": [
        "Android",
        "Kotlin",
        "Java",
        "Jetpack Compose",
        "Jetpack Libraries",
        "Navigation Component",
        "Material Design Guidelines",
        "MVVM Architecture",
        "MVP Architecture",
        "Clean Architecture",
        "Legacy Android Development (Fragments, Activities, Views)",
        "Kotlin Flow"
      ],
      "Architecture & Patterns": [
        "Dependency Injection (Hilt, Dagger2)",
        "Multi-threading (Coroutines, RxJava)",
        "Offline-First Architecture",
        "UDF (Unidirectional Data Flow)"
      ],
      "Networking & APIs": [
        "Retrofit",
        "Ktor",
        "Firebase Cloud Messaging (FCM)"
      ],
      "Storage & Persistence": [
        "Room Database",
        "DataStore Preferences"
      ],
      "Testing": [
        "Unit Testing (JUnit, MockK, Truth)",
        "UI Testing (Compose, Espresso)",
        "Integration Testing"
      ],
      "Tools & Others": [
        "Version Control (Git)",
        "Gradle",
        "ProGuard",
        "Resource Shrinking",
        "Google Play Location Services",
        "Glide",
        "Coil",
        "ExoPlayer",
        "Custom UI Components & Animations"
      ]
    },
    softSkills: {
      "Leadership": [
        "Technical Leadership",
        "Mentoring",
        "Cross-functional Collaboration"
      ],
      "Problem Solving": [
        "Analytical Thinking",
        "Debugging Complex Issues",
        "Innovation"
      ],
      "Work Ethic": [
        "Ownership",
        "Continuous Learning",
        "User-Focused"
      ]
    }
  },
  projects: [

    {
      name: "BoxTimer Pro",
      description:
        "A cross-platform interval timer built with Kotlin Multiplatform for fighters and fitness enthusiasts. Features stunning Material 3 themes, glove-friendly UI design, customizable audio cues, and smart landscape mode for gym setups. Runs natively on Android and iOS from a single codebase—because your workout timer shouldn't be platform-locked.",
      link: "https://github.com/Farajialireza82/BoxTimerPro",
      skills: ["Kotlin Multiplatform", "Jetpack Compose", "iOS", "Android", "Material 3"],
      slug: "boxtimer-pro",
      featured: true,
      bazaar: "https://cafebazaar.ir/app/com.cromulent.box_timer",
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
        "/images/boxtimer/3.png",
        "/images/boxtimer/1.png",
        "/images/boxtimer/2.png",
        "/images/boxtimer/4.jpg"
      ],
      thumbnails: [
        "/images/boxtimer/thumbnails/3.png",
        "/images/boxtimer/thumbnails/1.png",
        "/images/boxtimer/thumbnails/2.png",
        "/images/boxtimer/thumbnails/4.jpg"
      ],
      githubReadme: "https://raw.githubusercontent.com/Farajialireza82/BoxTimerPro/main/README.md",
      technologies: ["Kotlin Multiplatform", "Jetpack Compose", "SwiftUI", "SQLite", "Ktor"],
      status: "In Development",
      duration: "2 months"
    },
    {
      name: "Flex ERP/CRM",
      description:
        "A mission-critical enterprise application used by 500+ employees daily. Led complete UI/UX redesign, modernized legacy XML layouts, and implemented key enterprise features including real-time maps, Firebase notifications, in-app chat, barcode scanning, and Kanban workflows. Reduced crash rate by 85% and boosted performance by 40%.",
      skills: ["Kotlin", "MVP Architecture", "RxJava", "Retrofit", "Dagger", "Firebase", "Google Maps"],
      slug: "flex-erp-crm",
      featured: false,
      playStore: null,
      bazaar: null,
      detailedDescription: "Flex ERP/CRM is a comprehensive enterprise application that streamlines business operations for 500+ daily users. As the sole Android developer, I took full ownership of the app, leading a complete modernization effort that transformed a legacy system into a modern, scalable platform.",
      features: [
        "Real-time maps and geolocation services",
        "Firebase push notifications system",
        "In-app chat with media messaging capabilities",
        "Barcode scanning functionality",
        "Kanban-style workflow management UIs",
        "Clean Architecture (MVP) implementation",
        "Performance optimization and crash reduction",
        "Gradle migration from 4.2 to 8.2"
      ],
      screenshots: [
        "/images/flex/1.jpg",
        "/images/flex/2.jpg",
        "/images/flex/5.jpg",
        "/images/flex/4.jpg"
      ],
      thumbnails: [
        "/images/flex/thumbnails/1.jpg",
        "/images/flex/thumbnails/2.jpg",
        "/images/flex/thumbnails/5.jpg",
        "/images/flex/thumbnails/4.jpg"
      ],
      technologies: ["Kotlin", "MVP Architecture", "RxJava", "Retrofit", "Dagger", "Firebase", "Google Maps", "Room Database", "Gradle"],
      status: "Completed",
      duration: "1+ years"
    },
    {
      name: "Travelo",
      description:
        "A sophisticated travel companion app that demonstrates enterprise-level Android development with 95%+ test coverage. Features advanced AI-powered chatbot with multilingual support, custom Google Maps scraping engine, real-time API integrations (TripAdvisor, OpenWeatherMap), comprehensive offline-first architecture, and extensive testing suite including unit, integration, UI, and end-to-end tests. Built with Clean Architecture, MVVM, and modern Android development practices.",
      link: "https://github.com/Farajialireza82/VacationApp",
      skills: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Room", "Retrofit", "Testing", "API Integration"],
      slug: "travelo",
      featured: false,
      playStore: null,
      bazaar: null,
      detailedDescription: "Travelo represents a comprehensive travel companion application that showcases advanced Android development practices and extensive technical implementation. The project demonstrates mastery of modern Android architecture patterns, comprehensive testing strategies, and complex API integrations. Built with a focus on maintainability, scalability, and user experience, Travelo serves as a testament to enterprise-level mobile development capabilities.",
      features: [
        "AI-powered multilingual chatbot with Gemini API integration and natural language processing",
        "Custom Google Maps scraping engine built with FastAPI for real-time travel data processing",
        "Advanced offline-first architecture with Room database and intelligent caching strategies",
        "Comprehensive testing suite: 95%+ code coverage with Unit, Integration, UI, and E2E tests",
        "Real-time API integrations: TripAdvisor for attractions, OpenWeatherMap for weather data",
        "GPS-powered location discovery with custom mapping algorithms and route optimization",
        "Speech-to-speech language translation with real-time processing capabilities",
        "Currency converter with live exchange rate updates and offline fallback mechanisms",
        "Community engagement features with user-generated content and social sharing",
        "Travel insurance integration and emergency helpline functionality",
        "Material Design 3 implementation with custom theming and accessibility features",
        "MVVM architecture with Hilt dependency injection and Repository pattern",
        "Performance optimization with lazy loading, image caching, and memory management",
        "Security implementation with data encryption, secure API communication, and user privacy protection"
      ],
      screenshots: [
        "/images/travelo/2.png",
        "/images/travelo/1.png",
        "/images/travelo/3.png",
        "/images/travelo/4.jpg"
      ],
      thumbnails: [
        "/images/travelo/thumbnails/2.png",
        "/images/travelo/thumbnails/1.png",
        "/images/travelo/thumbnails/3.png",
        "/images/travelo/thumbnails/4.jpg"
      ],
      githubReadme: "https://raw.githubusercontent.com/Farajialireza82/VacationApp/main/README.md",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Room", "Retrofit", "JUnit", "MockK", "Espresso", "Google Maps API", "OpenWeatherMap API", "TripAdvisor API"],
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
    "Managed all aspects of Android development for Flex ERP/CRM app used by ~500 employees daily",
    "Collaborated with design teams to plan and execute UI/UX redesign, modernizing legacy XML layouts into scalable interfaces",
    "Developed and implemented enterprise features including real-time maps, Firebase notifications, in-app chat, barcode scanning, and Kanban workflows",
    "Applied Clean Architecture (MVP) using Kotlin, Coroutines, RxJava, Retrofit, and Dagger for maintainable code",
    "Served as sole Android developer for over a year, then led hiring and onboarding of additional Android talent",
    "Conducted comprehensive edge-case testing and quality assurance processes before production releases",
    "Managed complete Android development lifecycle from requirements gathering to deployment and maintenance",
    "Collaborated with cross-functional teams including designers, product managers, and backend developers",
    "Mentored junior developers and established coding standards while learning invaluable lessons from senior engineers—creating a culture of mutual growth and knowledge sharing",
    "Performed performance optimization, dependency management, and build system improvements"
  ],
keyAchievements: [
    "Took full ownership of mission-critical Flex ERP/CRM app used by 500+ employees daily, becoming the go-to expert for all Android development decisions",
    "Reduced app crash rate by 85% through architecture refactoring and comprehensive testing, dramatically improving stability for 500+ daily users",
    "Boosted overall app performance by 40% through network optimization, database improvements, and UI rendering enhancements",
    "Delivered 15+ major features and dozens of enhancements on time and within scope, directly supporting business growth and operational efficiency",
    "Migrated entire project from Gradle 4.2 to 8.2, reducing build times by 60% and enabling modern development tooling",
    "Reduced APK size by 35% and build time by 50% through ProGuard optimization and dependency cleanup",
    "Successfully scaled Android team from 1 to 2 developers, hiring and mentoring new talent while maintaining development velocity",
    "Eliminated 90% of post-release bugs through improved testing protocols and edge-case coverage",
    "Achieved 95% user satisfaction score for UI/UX redesign, transforming legacy interface into modern, intuitive experience",
    "Reduced QA cycle time by 40% through better testing practices and automated quality checks",
    "Established clean architecture standards that improved code maintainability and reduced technical debt by 70%"
  ],
      detailedDescription: "My time at Novaday Co. was truly transformative, both professionally and personally. As the primary Android developer for a mission-critical enterprise application supporting 500+ employees daily, I not only grew technically but also formed incredible friendships and learned invaluable lessons from an amazing team of developers and engineers. The collaborative spirit, mutual support, and shared passion for building great software made every challenge feel like an opportunity to grow together. Working alongside such talented people taught me that the best code isn't just about technical excellence, it's about the relationships you build and the impact you make as a team.",
      technologies: ["Kotlin", "MVP Architecture", "RxJava", "Retrofit", "Dagger", "Firebase", "Google Maps", "Room Database", "Gradle"],
      companyPhotos: [
        "/images/novaday/3.jpg",
        "/images/novaday/1.jpeg",
        "/images/novaday/2.jpg",
        "/images/novaday/4.jpg"
      ],
      companyPhotoThumbnails: [
        "/images/novaday/thumbnails/3.jpg",
        "/images/novaday/thumbnails/1.jpeg",
        "/images/novaday/thumbnails/2.jpg",
        "/images/novaday/thumbnails/4.jpg"
      ],
      companyDescription: "Novaday Co. is a technology company specializing in innovative business solutions and enterprise software. The company develops modular ERP systems, smart office solutions, and employee recognition platforms. Novaday operates NovaCollege, a training and internship program that provides real product experience to emerging talent. The company focuses on empowering businesses through technology solutions including Flex ERP, Relay room booking systems, and Kudos employee recognition platforms.",
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
      name: "Sudabeh Zolfikhoram",
      title: "Product designer",
      company: "Novaday Co.",
      avatar: "/images/recommendations/sudabeh-zolfikhoram.jpg",
      avatarThumbnail: "/images/recommendations/thumbnails/sudabeh-zolfikhoram.jpg",
      text: "I had the pleasure of working with Alireza at Novaday, and I can confidently say he’s one of the most dedicated Android developers I’ve collaborated with. His technical expertise, attention to detail, and strong sense of responsibility consistently led to high-quality results.\nBeyond his technical skills, Alireza stands out for his teamwork and proactive attitude. He’s always eager to learn, share knowledge, and push projects toward their best possible outcome. Any team would be lucky to have him. Beyond his technical skills, Alireza stands out for his teamwork and proactive attitude. He’s always eager to learn, share knowledge, and push projects toward their best possible outcome. Any team would be lucky to have him.",
      date: "October 2025",
      connection: "Former Colleague"
    },
    {
      id: "rec-2",
      name: "Milad Khosravi",
      title: "Senior Backend Developer",
      company: "Novaday Co.",
      avatar: "/images/recommendations/milad-khosravi.jpg",
      avatarThumbnail: "/images/recommendations/thumbnails/milad-khosravi.jpg",
      text: "I had the pleasure of working with Alireza on several Android projects, and I can confidently say he is an exceptional Kotlin developer. His deep understanding of Android architecture, Jetpack components, and modern development practices makes him a standout engineer.",
      date: "February 2025",
      connection: "Former Colleague"
    },
    {
      id: "rec-3", 
      name: "Arman Mohammadi",
      title: "Product Manager",
      company: "Novaday Co.",
      avatar: "/images/recommendations/arman-mohammadi.jpeg",
      avatarThumbnail: "/images/recommendations/thumbnails/arman-mohammadi.jpeg",
      text: "I had the pleasure of working with Alireza, an incredibly dedicated Android developer, who consistently delivered high-quality implementations of new product features. During our time together, he successfully redeveloped an ERP application (Flex), bringing substantial improvements to its user interface, user experience, infrastructure, and architecture. Alireza is focused, patient, hardworking, and kind, making collaboration with him truly enjoyable. He’s always eager to learn and grow within his field. I highly recommend him.",
      date: "November 2024",
      connection: "Former Colleague"
    }
  ],
};