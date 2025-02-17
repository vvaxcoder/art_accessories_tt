# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Организация
ООО Арт аксессориз
Санкт-Петербург
->hh.ru

Тестовая задача.

Реализовать проект на на Nuxt3 Composition API + Tailwind + Type Script очень желательно.

1) Создать пустой проект на Nuxt 3 Composition API.

2) Найти что такое JSONPlaceholder API.
   - Найти документацию по эндпоинту /posts

3) Реализовать таблицу просмотра постов в соответствии с полями предусмотреными в формате отдаче /posts/
   По 10 элементов на страницу, пагинация должна быть с состоянием перезагрузки throbber
Троббер (от англ. throbber — «пульсатор»), асинхронный индикатор выполнения, иногда спиннер — графическое изображение в графическом интерфейсе пользователя компьютерной программы, которое анимируется, чтобы показать пользователю, что программа выполняет какое-то действие, но время завершения этого действия не определено (например, если ожидается получение ответа от удалённого сервера), либо не имеет значения.

4) Полученые посты и состояние перезагрузки должны храниться в стор менедежере по вашему желанию.
5) Добавить возможность ordering таблицы по ID
6) Добавить возможность создавать новый пост через модалку.
7) Обязательно подумать с точки зрения пользования на сколько удобно финальному пользователю.

Общие пожелания: Чистая верстка которой приятно пользоваться.