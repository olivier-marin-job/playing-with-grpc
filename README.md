## gRPC Java, React & Envoy

### Installer les plugins gRPC

### Générer les sources gRPC

### Lister les tâches du projet Gradle

```shell
$ cd java-grpc
$ sh gradlew tasks 
```
### Compiler le projet Gradle

```shell
$ cd java-grpc
$ sh gradlew build 
```

### Lancer le projet Gradle

```shell
$ cd java-grpc
$ sh gradlew shadowJar
$ java -jar ./build/libs/udemy-grpc-1.0-SNAPSHOT-all.jar
```