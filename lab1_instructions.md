# Lab 1 Instructions

## 1. System requirements
Document specifications of the system being used for React Native development. This includes the CPU, RAM size, and Windows version.

- CPU: 12th Gen Intel® Core™ i7-1260P, 2100 Mhz, 12 Core(s), 16 Logical processor(s)
- RAM SIZE: 64 GB 
- OS: Windows 11 - Microsoft Windows version 22H2 (OS 22621.24.28)

## 2. Installation instructions
Include step-by-step instructions for installing the necessary tools and dependencies required for the framework, such as Node.js, and the React Native CLI.

1. Install Chocolatey to install node and JDK 11
    - In PowerShell run `Get- ExecutionPolicy`
    - In powerShell run `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`
2. Install NODE and JDK 11
    - Run Command Prompt as admin and run `choco install -y nodejs-lts microsoft-openjdk11`
3. Install Android Studio and when installation wizard check these
    - Android SDK
    - Android SDK Platform
    - Android Virtual Device 
4. Install Android SDK
    - Open Android Studio, click on "More Actions" button, and select "SDK Manager."
    - In the "SDK Platforms" tab, check "Show Package Details" and ensure the following are checked under "Android 34 API":
        - Android SDK Platform 34
        - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
    - In the "SDK Tools" tab, check "Show Package Details" and ensure that under "Android SDK Build-Tools," version 33.0.0 is selected.

## 3. Configuration steps
Detail any necessary configuration steps required to set up the framework, such as setting environment variables or configuring project settings.

1. Set Up Environment Variables
    - Press the Windows key, search, and press "Edit the system environment variables."
    - Navigate to environment variables.
    - Click on New and create a new variable:
        - Variable name: ANDROID_HOME
        - Variable value: Path to Android SDK (e.g., C:\Users\Nico\AppData\Local\Android\Sdk).
2. Add Platform-tools to Path
    - In the same window, select the Path variable.
    - Click Edit.
    - Click New and add the path to platform-tools (e.g., C:\Users\Nico\AppData\Local\Android\Sdk\platform-tools).
3. Open Virtual Device Manager and Create New Device
    - Choose a phone size and select "Tiramisu" with an API Level of "33."
    - Click next and finish.
    - Launch the emulator.

## 4. Project creation
Outline the steps involved in creating a new project using the framework, including any necessary setup or configuration.

1. Navigate to the desired folder in the Command Line, then run:
    - `npx react-native@latest init projectName`
    - Replace "projectName" with your preferred name

## 5. Running the project
Detail how to run the project in an Android Device Simulator.

1. Once your project is installed, type the following in the CLI:
    - `npx react-native run-android`
    - If successful, your project will be shown on the emulated Android.

## 6. Troubleshooting
Include information on how to troubleshoot common issues that may arise during setup or development, such as debugging and error messages. This may need to be updated in the future.

1. If you encounter the "Failed to install the app" error:
    - Open Android Studio and navigate to SDK manager.
    - In the "SDK Tools" tab, uncheck the problematic build-tool version.
    - Run the following in the CLI:
        - `npx react-native run-android`

## 7. Resources
Provide links to additional resources and documentation that can be used for reference and further learning, such as official documentation, tutorials, and Stack Overflow answers.

- You can use the following links for a more in-depth guide to installing React-Native:
    - [React Native Environment Setup](https://reactnative.dev/docs/environment-setup?guide=native&platform=android&os=windows)