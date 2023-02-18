FROM envoyproxy/envoy:v1.21-latest

# Copy the envoy configuration

COPY envoy.yaml /etc/envoy/envoy.yaml

RUN chmod go+r /etc/envoy/envoy.yaml

# Create envoy log file

WORKDIR /logs

RUN touch envoy.log

RUN chmod go+rw envoy.log

# Run envoy

CMD envoy -c /etc/envoy/envoy.yaml --log-level trace --log-path /logs/envoy.log
