## gRPC Java, React & Envoy

### Générer les sources gRPC Java

Lien: [Plugin gRPC JAVA](https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/1.52.1/)

```shell
$ mv ~/Téléchargements/protoc-gen-grpc-java-1.40.1-osx-x86_64.exe /usr/local/bin/protoc-gen-grpc-java-1.40.1-linux-x86_64.exe
$ chmod +x /usr/local/bin/protoc-gen-grpc-java-1.40.1-linux-x86_64.exe
$ cd /$HOME/Documents/cours/grpc/playing-with-grpc/java-grpc/
$ sh grpc_generation.sh
```
Ou utiliser le plugin gradle

```shell
$ sh gradlew build
```

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

![gRPC JAVA](images/gradle-grpc.png)

### Transpiler le projet React

```shell
$ npm install
$ npm start
$ export NODE_OPTIONS=--openssl-legacy-provider
```
![gRPC React](images/react-grpc.png)

### Lancer le docker compose

```shell
$ docker-compose up
```

![gRPC Docker Compose](images/docker-compose-grpc.png)

### Requête pour changer le niveau du logger http d'envoy

```shell
$ curl -X POST http://localhost:9901/logging?http=debug
$ curl -X POST http://localhost:9901/logging?http2=debug
```