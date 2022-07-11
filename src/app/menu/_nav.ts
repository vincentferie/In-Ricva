import { INavData } from 'src/app/layout/public-api';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/app/dashboard',
    icon: 'fa fa-tachometer',
  },
  {
    name: 'Opérations',
    url: '/app/lot-management',
    icon: 'fa fa-certificate',
    children: [
      {
        name: 'Gestion des lots ',
        url: '/app/lot-management/unloads',
        icon: '',
        children: [
          {
            name: 'Déchargements',
            url: '/app/lot-management/unloads',
            icon: '',
          },
          {
            name: 'Entreposage',
            url: '/app/lot-management/storage',
            icon: '',
          },
          {
            name: 'Empotage',
            url: '/app/lot-management/potting-plan',
            icon: '',
            children: [
              {
                name: "Plan d'empotage",
                url: '/app/lot-management/potting-plan',
                icon: '',
              },
              {
                name: "Exécution",
                url: '/app/lot-management/execution',
                icon: '',
              },
            ]
          },
        ]
      },
    ]
  }
];
