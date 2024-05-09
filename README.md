# Android App

This is an Android app built using React Native. It helps users find and see the status of specific services on a map. Right now, the app only shows the map. In the future, I plan to add features that will allow it to show specific services and connect to a database for more details.

## **Getting Started**

- **Prerequisites:** 
  - Node.js and npm installed on your machine.
  - Android Studio setup for Android development.
  - A configured [React Native development environment.](https://reactnative.dev/docs/environment-setup?guide=native)

- **Installation:**

    - Clone the repository
    - Install dependencies:

        ```bash
        npm install
        ```

- **Running the Application:**
  ```bash
  npx react-native run-android
  ```

## **Example**

- **Integrating a Map**

  ```javascript
  // Map integration in a React component
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    {this.state.services.map(service => (
      <Marker
        coordinate={{ latitude: service.latitude, longitude: service.longitude }}
        title={service.name}
      />
    ))}
  </MapView>
  ```

## **Roadmap**

  - [X] Implement a map view to show the location and status of services.
  - [ ] Add features to show the status of the services.
  - [ ] Establish a connection to a database for accessing and storing service-related data.
  - [ ] Incorporate real-time updates from Telegram to show the latest service statuses.

