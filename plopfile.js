export default function (plop) {
  plop.setGenerator('project', {
    description: 'oBerry template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Project name?',
        validate: value => {
          if (value.trim() !== '') return true;
          return 'name is required';
        },
      },
      {
        type: 'list',
        name: 'language',
        message: 'Which language would you like to use?',
        choices: ['TypeScript', 'JavaScript'],
        default: 'TypeScript',
      }
    ],
    actions: data => {
      const templateBase = `templates/${data.language}`;

      return [
        {
          type: 'addMany',
          destination: '{{dashCase name}}',
          base: templateBase,
          templateFiles: `${templateBase}/**`,
          globOptions: { dot: true },
          skipIfExists: true
        }
      ];
    }
  });
}

