FROM openjdk:8-jdk-alpine

COPY build/libs/udemy-grpc-1.0-SNAPSHOT-all.jar /udemy-grpc-1.0-SNAPSHOT-all.jar

EXPOSE 9090:9090

ENTRYPOINT ["java", "-jar", "/udemy-grpc-1.0-SNAPSHOT-all.jar"]
