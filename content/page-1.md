+++
title = "page-1"
date = 2024-07-20
+++

## `groups and shit`

this is where groups are used, to provide/limit access to certain files/folders and commands too.

impacts the ownership metadata, which is crucial for access control based on user and group.

### limit access to files/folders

**consider this with an example:**

- Consider a file `myfile` with the current owner **bob**, group **staff**, and permissions **rw-r--r-- (644)**.
- Running `chown alice:developers myfile` would change the **owner to alice** and the **group to developers**, but leave the **permissions unchanged at rw-r--r--.**
- Running `chmod 770 myfile` would change the permissions to **rwxrwx---**, but leave the owner as bob and the group as staff.

so in short, **chmod** makes sure to set permissions for WHOEVER owns that file/dir. and **chown** sets WHO owns that file.

#### chmod

If you want to change what users can do with a file, you probably want chmod.

impacts the permission bits, directly influencing file accessibility for the owner, group, and others.

- to change permissions of a file/dir: `sudo chmod 770 file` or `sudo chmod +wx file`
- for all files in a dir including the dir: `sudo chmod -R 700 /path/to/dir`
- executing a folder means to access it's contents
- "file/dir" "owner" "group" "others"
- owner = who created, group = group, others = not the owner nor in the group
- 4 2 1 = r w x

**change the permissions of ALL new files created in a directory**

- `sudo chmod g+s /path/to/directory`

#### chown

If you want to change the owner of a file, you probably want chown.

- `sudo chown [owner][:group] file/dir` like `sudo chown bruh:bruh nicefile`

**one type of flow**

```bash
sudo groupadd projectX
sudo usermod -aG projectX alice
sudo usermod -aG projectX bob

groups alice

sudo chown :projectX /shared/projectX
chmod 770 /shared/projectX
chmod g+s /shared/projectX
```

**flow for a group permissions file/dir**

- create a dir in /: `sudo mkdir shared`
- create a new group: `sudo groupadd shared-group`
- by default it will have: owner = `root`, group = `root`
- change that `sudo chown <new-owner-name-if-needed>:shared-group shared`, `sudo chown :shared-group shared`
- now it has owner = `dpi0`, group = `shared-group`
- now change the permissions for the group of the directory to: drwxr--r-- `chmod 744 shared`
- **NOTE:** group name doesn't matter, it doesn't have any properties. only thing that matters is users are under the same group, and the file/dir has the appropriate group permissions

Go back [home](../).
