+++
title = "page-1"
date = 2024-07-20
+++

This is my first blog post.

!!! danger "important"

    the /etc/sudoers file controls which users/groups can run commands as superusers.

    it only manages which users/groups can HAVE SUDO ACCESS

    **it is not meant to restrict the no. of commands available to the user, you idiot!** that comes under ACL SELinux or other more advanced utilities.

    it only specifies as literally in the name (sudo) which commands a user/users or group can run as the FREAKING SUPERUSER. that's it

[page-2](../page-2)

```bash
# bad way
sudo vim /etc/sudoers

# better way
sudo EDITOR=/usr/bin/vim visudo
```

## syntax of sudoers

```bash
user_or_group host=(runas_user:runas_group) command_list
```

1. **user_or_group**: user or group to which the rule applies
2. **host**: hostname or IP address where the rule applies (ALL for all hosts, hostname for a specific host or 192.168.1.0/24)
3. **runas_user:runas_group**: user to run the command as root/alice etc, group to run the command as, (ALL:ALL) means the **command can be run as any user and any group**
4. **command_list**: Multiple commands separated by commas, e.g., `/usr/bin/less`, `/usr/bin/ls`

## complete sudo access for a user

```bash
alice ALL=(ALL:ALL) ALL
# alice can run all commands AS SUDO as any user or group on all hosts
```

## limited access to sudo

```bash
bob ALL=(root) /usr/bin/git, /bin/systemctl
# bob can run only run apt and systemctl AS SUDO!! as root user on all hosts

---
[bob@arch ~]$ sudo git
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]

[bob@arch ~]$ sudo systemctl status nftables.service
○ nftables.service - Netfilter Tables
     Loaded: loaded (/usr/lib/systemd/system/nftables.service; enabled; preset: disabled)
     Active: inactive (dead) since Wed 2024-06-26 21:54:26 IST; 3h 28min ago
 Invocation: ec235cbffc8f41989d1a22b0100d2a9c
       Docs: man:nft(8)

[bob@arch ~]$ sudo cat
Sorry, user bob is not allowed to execute '/sbin/cat' as root on arch.

[bob@arch ~]$ sudo top
Sorry, user bob is not allowed to execute '/sbin/top' as root on arch.
---
```

## complete sudo access to a group

```bash
%wheel ALL=(ALL:ALL) ALL
# users in the wheel group can run all commands as SUDO as any user or group on all hosts
```

## limited sudo access to a group

```bash
%developers ALL=(ALL:ALL) /usr/bin/git, /usr/bin/make
# users in the developers group can only run git and make as SUDO, as any user or group
```

## ?????

```bash
alice ALL=(bob:admin) /usr/bin/top
???????????????????????????///
alice ALL=(bob:alice) /usr/bin/less
alice ALL=(webadmin) /usr/bin/vi /var/www/*
alice ALL=(ALL:log) /usr/bin/tail /var/log/*
```

## only on a specific host

```bash
alice hostisforalice=(ALL:ALL) /usr/bin/htop
# alice can only run htop as SUDO if the hostname=hostisforalice
```

## aliases in sudoers

- User_Alias ADMINS = alice, bob
- Cmnd_Alias WEB_CMDS = /usr/bin/curl, /usr/bin/wget

```bash
ADMINS ALL=(ALL) WEB_CMDS
```

## restrict to only a shell

create restricted bash (rbash): `sudo cp /bin/bash /bin/rbash` and `sudo usermod -s /bin/rbash alice`
