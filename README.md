### 환경

- Prettier
- Eslint
- Husky

### 추후 개선할 프로젝트 구조

```
📦 src
├── 📂 apis
│   ├── 📂 auth
│   │   │── 📄 index.tsx
│   ├── 📂 core
│   │   │── 📄 index.tsx
│   └── 📂 todos
│        └── 📄 index.tsx
│── 📂 hooks
│    │── 📄 useAuthRedirection.ts
│    └── 📄 useRouter.ts
│── 📂 layout
│    └── 📄 GeneralLayout.tsx
│── 📂 pages
│    │── 📂 home
│    │    │── 📄 index.tsx
│    │── 📂 siginin
│    │    │── 📄 index.tsx
│    │    │── 📄 signin.hook.ts
│    │── 📂 signup
│    │    │── 📄 index.tsx
│    └── 📂 todo
│         │── 📄 InsertForm.tsx
│         │── 📄 ListItem.tsx
│         │── 📄 index.tsx
│         └── 📄 todo.hooks.ts
└── 📂 utils
    ├── 📂 auth
    │   │── 📄 index.ts
    ├── 📂 constants
    │   │── 📄 path.ts
    └── 📂 helper
         └── 📄 validationCheck.ts
```
