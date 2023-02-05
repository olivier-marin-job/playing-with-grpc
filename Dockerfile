FROM envoyproxy/envoy-dev:b145180d17cac80aa5f9a7801429d52017fea6d1

# Copy the envoy configuration

COPY envoy.yaml /etc/envoy/envoy.yaml

RUN chmod go+r /etc/envoy/envoy.yaml

# Create envoy log file

RUN mkdir logs

RUN touch logs/envoy.log

RUN chmod go+rw logs/envoy.log

# Run envoy

CMD envoy -c /etc/envoy/envoy.yaml --log-level trace --log-path logs/envoy.log
