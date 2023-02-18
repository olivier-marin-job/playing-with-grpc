## I. <u>Serveur gRPC Java</u>

#### 1.a. <u>Générer les sources gRPC Java</u>

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

#### 1.b. <u>Lister les utilitaires fournis par Gradle</u>

```shell
$ cd java-grpc
$ sh gradlew tasks 
```
#### 1.c. <u>Compiler java-grpc avec Gradle</u>

```shell
$ cd java-grpc
$ sh gradlew build 
```

#### 1.d. <u>Lancer java-grpc depuis la console</u>

```shell
$ cd java-grpc
$ sh gradlew shadowJar
$ java -jar ./build/libs/udemy-grpc-1.0-SNAPSHOT-all.jar
```

![gRPC JAVA](images/gradle-grpc.png)

#### 1.e. <u>Lancer java-grpc depuis docker</u>

```shell
$ docker build -t java-grpc:v1 .
$ docker run --name java-grpc -p 9090:9090 --rm -dit java-grpc:v1
$ docker container logs java-grpc
```

![gRPC JAVA Docker](images/grpc-java-docker.png)

#### 1.f. <u>Arrêter et supprimer java-grpc</u>

```shell
$ docker stop java-grpc
```

#### 1.g. <u>Lancer java-grpc depuis docker en mode interactif</u>

```shell
$ docker build -t java-grpc:v1 .
$ docker run --name java-grpc --rm -it --entrypoint /bin/sh java-grpc:v1
# java -jar udemy-grpc-1.0-SNAPSHOT-all.jar
```

## II. <u>Client gRPC React</u>

#### 2.a <u>Compiler react-grpc avec npm depuis la console</u>

```shell
$ cd react-grpc
$ npm run build
$ npm run start
```

Remarque:

```shell
$ export NODE_OPTIONS=--openssl-legacy-provider
```

![react-grpc-docker.png](images/react-grpc-docker.png)

#### 2.b. <u>Lancer react-grpc depuis docker</u>

```shell
$ cd react-grpc
$ docker build -t react-grpc:v1 .
$ docker run --name react-grpc -p 3000:3000 --rm -dit react-grpc:v1
```

#### 2.c. <u>Arrêter et supprimer react-grpc</u>

```shell
$ docker stop react-grpc
```

## III. <u>Network Docker</u>

## IV. <u>Proxy Envoy</u>

#### Requête pour changer le niveau du logger http d'envoy

```shell
$ curl -X POST http://localhost:9901/logging?http=debug
$ curl -X POST http://localhost:9901/logging?http2=debug
```

## V. <u>Docker Compose</u>