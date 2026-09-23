// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "cordova-plugin-firebase-inappmessaging",
    platforms: [.iOS(.v15)],
    products: [
        .library(name: "cordova-plugin-firebase-inappmessaging", targets: ["FirebaseInappMessagingPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/apache/cordova-ios.git", branch: "master"),
        .package(url: "https://github.com/firebase/firebase-ios-sdk.git", exact: "$IOS_FIREBASE_SDK_VERSION")
    ],
    targets: [
        .target(
            name: "FirebaseInappMessagingPlugin",
            dependencies: [
                .product(name: "Cordova", package: "cordova-ios"),
                .product(name: "FirebaseInAppMessaging-Beta", package: "firebase-ios-sdk")
            ],
            path: "src/ios",
            resources: [],
            publicHeadersPath: "."
        )
    ]
)
