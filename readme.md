 **README.md** for your Node.js package **`git-zipper`** 👇

---

````markdown
# 🧩 git-zipper

A lightweight Node.js CLI tool that **creates a ZIP file of untracked files in your Git repository** — perfect for keeping a backup or reviewing your changes before committing.

---

## 🚀 Installation

Install `git-zipper` globally using npm:

```bash
npm i -g git-zipper
````

---

## 🧠 Usage

Run the command inside your Git project directory:

```bash
git-zipper <filename>
```

### Example:

```bash
git-zipper backup
```

This will create a zip file named `backup.zip` containing all **untracked (new)** files from your working directory.

---

## 🎯 Why Use git-zipper?

When working on a project, you often modify or add new files before committing your changes.
`git-zipper` helps you:

* 📦 **Create a zip backup** of all your **untracked files** before committing.
* 🔍 **Review your changes easily** without messing with the Git index.
* 👨‍💻 **Share work-in-progress** code snippets with teammates safely.
* 🛡️ **Prevent accidental data loss** while experimenting with code.

---

## 📁 Output Example

If you run:

```bash
git-zipper my-changes
```

You’ll get:

```
my-changes.zip
├── src/
│   ├── newComponent.js
│   └── helper.js
└── test/
    └── testFile.js
```

---

## ⚙️ Requirements

* Node.js v14+
* Git must be installed and initialized (`git init`)

---

## 💡 Tips

* Always run the command **before** committing your changes.
* The tool only zips **untracked files**, not modified or staged ones.
* You can use this in CI/CD or as a pre-commit safety step.

---

## 🧑‍💻 Author

**Kartik Chauhan**
🔗 [GitHub](https://github.com/ranakartikchauhan)
📧 [kartikchauhan336@gmail.com](mailto:kartikchauhan336@gmail.com)

---

## 🪪 License

MIT © 2025 Kartik Chauhan

