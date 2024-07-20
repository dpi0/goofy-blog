+++
title = "page-2"
date = 2024-07-20
+++

# AWS

**PEM (Privacy Enhanced Mail) file** is a container format used to store cryptographic information, such as public keys, private keys, certificates, and other cryptographic objects

PEM files can have various extensions, such as .pem, .crt, .cer, or .key.

file.pem can contain anything:

- a certificate with a public key
- an SSH public key
- public key + private key
- certificate with a public key + private key

**using the aws .pem file as the priv key:**

first check the default user of the instance from the console

```bash
chmod 600 /path/to/file.pem

ssh -i "~/.ssh/file.pem" default-user@xxxx.compute.amazonaws.com
```

**can extract pub key from pem file:** `ssh-keygen -y -f file.pem > file.pub`

ppk is used for putty on windows: convert .pem <--> .ppk: https://repost.aws/knowledge-center/ec2-ppk-pem-conversion

https://dylancastillo.co/fastapi-nginx-gunicorn/
