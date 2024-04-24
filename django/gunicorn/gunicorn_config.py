import multiprocessing

# Bind
bind = "0.0.0.0:8080" 
# Workers
workers = multiprocessing.cpu_count() * 2 + 1 
# Worker Class
worker_class = "sync"  
# Timeout
timeout = 30 
# Keep Alive
keepalive = 2  

# Logging
accesslog = "-" 
errorlog = "-" 
loglevel = "info"