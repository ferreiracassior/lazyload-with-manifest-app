export interface Mfe {
  id: string;
  title: string;
  remoteEntry: string;
}

export interface PageLayout {
    cols: number;
    rows: number;
    x?: number;
    y?: number;
}

export interface LocalComponent {
    name: string;
}

export interface PageContainer extends PageLayout {
    id: string;
    elementToLoad: Mfe | LocalComponent | null;
}

export interface GroupedContainers {
    tabName: string;
    containers: PageContainer[];
}

export interface PageElementsLayout {
    sectionCols?: number;
    sectionRows?: number;
    elements: PageContainer[] | GroupedContainers[];
}

export interface PageSectionLayout {
    sectionName: string;
    sectionLayout: PageElementsLayout;
    sectionLayoutTablet?: PageElementsLayout;
}

export const pageLayout: PageSectionLayout[] = [
    {
        sectionName: 'visão geral',
        sectionLayout: {
            sectionCols: 12,
            sectionRows: 100,
            elements: [
            {   
                id: 'container01', 
                cols: 12, 
                rows: 2,
                elementToLoad: { id: 'site-01', title: 'Site Público 01', remoteEntry: 'https://example.com'}
            },
            { 
                id: 'container02', 
                cols: 4, 
                rows: 2,
                elementToLoad: { id: 'site-02', title: 'Site Público 02', remoteEntry: 'https://example.org' }
            },
            { 
                id: 'container03', 
                cols: 4, 
                rows: 2, 
                elementToLoad: { id: 'site-03', title: 'Site Público 03', remoteEntry: 'https://example.net' }
            },
            { 
                id: 'container04', 
                cols: 4, 
                rows: 5,
                elementToLoad: { id: 'site-04', title: 'Site Público 04', remoteEntry: 'https://httpbin.org/html' } },
            { 
                id: 'container05', 
                cols: 8, 
                rows: 3, 
                elementToLoad: { id: 'site-05', title: 'Site Público 05', remoteEntry: 'https://jsonplaceholder.typicode.com' } },
            { 
                id: 'container06', 
                cols: 3, 
                rows: 2, 
                elementToLoad: { id: 'site-06', title: 'Site Público 06', remoteEntry: 'https://www.openstreetmap.org/export/embed.html?bbox=-46.7%2C-23.7%2C-46.6%2C-23.5&layer=mapnik' } },
            { 
                id: 'container07', 
                cols: 3, 
                rows: 1, 
                elementToLoad: { id: 'site-07', title: 'Site Público 07', remoteEntry: 'https://www.iana.org/domains/reserved' } },
            { 
                id: 'container08', 
                cols: 3, 
                rows: 1, 
                elementToLoad: { id: 'site-08', title: 'Site Público 08', remoteEntry: 'https://example.com' } },
            { 
                id: 'container09', 
                cols: 3, 
                rows: 1, 
                elementToLoad: { id: 'site-09', title: 'Site Público 09', remoteEntry: 'https://example.org' } },
            { 
                id: 'container10', 
                cols: 3, 
                rows: 1, 
                elementToLoad: { id: 'site-10', title: 'Site Público 10', remoteEntry: 'https://example.net' } },
            { 
                id: 'container12', 
                cols: 6, 
                rows: 4, 
                elementToLoad: { id: 'site-12', title: 'Site Público 12', remoteEntry: 'https://httpbin.org/html' } },
            { 
                id: 'container13', 
                cols: 6, 
                rows: 2, 
                elementToLoad: { id: 'site-13', title: 'Site Público 13', remoteEntry: 'https://jsonplaceholder.typicode.com' } },
            { 
                id: 'container14', 
                cols: 6, 
                rows: 1, 
                elementToLoad: { id: 'site-14', title: 'Site Público 14', remoteEntry: 'https://www.openstreetmap.org/export/embed.html?bbox=-46.7%2C-23.7%2C-46.6%2C-23.5&layer=mapnik' } },
            ],
        },
        sectionLayoutTablet: {
            sectionCols: 8,
            sectionRows: 100,
            elements: [
            {   
                id: 'container01', 
                cols: 8, 
                rows: 2,
                elementToLoad: { id: 'site-01', title: 'Site Público 01', remoteEntry: 'https://example.com'}
            },
            { 
                id: 'container02', 
                cols: 4, 
                rows: 4,
                elementToLoad: { id: 'site-02', title: 'Site Público 02', remoteEntry: 'https://example.org' }
            },
            { 
                id: 'container03', 
                cols: 4, 
                rows: 4, 
                elementToLoad: { id: 'site-03', title: 'Site Público 03', remoteEntry: 'https://example.net' }
            },
            { 
                id: 'container04', 
                cols: 4, 
                rows: 4,
                elementToLoad: { id: 'site-04', title: 'Site Público 04', remoteEntry: 'https://httpbin.org/html' } },
            { 
                id: 'container05', 
                cols: 4, 
                rows: 4, 
                elementToLoad: { id: 'site-05', title: 'Site Público 05', remoteEntry: 'https://jsonplaceholder.typicode.com' } },
            { 
                id: 'container06', 
                cols: 3, 
                rows: 2, 
                elementToLoad: { id: 'site-06', title: 'Site Público 06', remoteEntry: 'https://www.openstreetmap.org/export/embed.html?bbox=-46.7%2C-23.7%2C-46.6%2C-23.5&layer=mapnik' } },
            { 
                id: 'container07', 
                cols: 3, 
                rows: 3, 
                elementToLoad: { id: 'site-07', title: 'Site Público 07', remoteEntry: 'https://www.iana.org/domains/reserved' } },
            { 
                id: 'container08', 
                cols: 3, 
                rows: 3, 
                elementToLoad: { id: 'site-08', title: 'Site Público 08', remoteEntry: 'https://example.com' } },
            { 
                id: 'container09', 
                cols: 3, 
                rows: 1, 
                elementToLoad: { id: 'site-09', title: 'Site Público 09', remoteEntry: 'https://example.org' } },
            { 
                id: 'container10', 
                cols: 3, 
                rows: 1, 
                elementToLoad: { id: 'site-10', title: 'Site Público 10', remoteEntry: 'https://example.net' } },
            { 
                id: 'container12', 
                cols: 6, 
                rows: 4, 
                elementToLoad: { id: 'site-12', title: 'Site Público 12', remoteEntry: 'https://httpbin.org/html' } },
            { 
                id: 'container13', 
                cols: 6, 
                rows: 2, 
                elementToLoad: { id: 'site-13', title: 'Site Público 13', remoteEntry: 'https://jsonplaceholder.typicode.com' } },
            { 
                id: 'container14', 
                cols: 6, 
                rows: 1, 
                elementToLoad: { id: 'site-14', title: 'Site Público 14', remoteEntry: 'https://www.openstreetmap.org/export/embed.html?bbox=-46.7%2C-23.7%2C-46.6%2C-23.5&layer=mapnik' } },
            ],
        },
    },
    {
        sectionName: 'financeiro',
        sectionLayout: {
            sectionCols: 12,
            sectionRows: 2,
            elements: [
            {
                tabName: 'CNPJs',
                containers: [
                    {   
                        id: 'container01', 
                        cols: 12, 
                        rows: 2,
                        elementToLoad: { id: 'site-fn-01', title: 'Site Público CNPJ', remoteEntry: 'https://example.com'}
                    },
                ]
            },
            {
                tabName: 'CPFs',
                containers: [
                    {   
                        id: 'container01', 
                        cols: 6, 
                        rows: 2,
                        elementToLoad: { id: 'site-fn-02', title: 'Site Público CPF 01', remoteEntry: 'https://httpbin.org/html'}
                    },
                    {   
                        id: 'container01', 
                        cols: 6, 
                        rows: 2,
                        elementToLoad: { id: 'site-fn-03', title: 'Site Público CPF 02', remoteEntry: 'https://jsonplaceholder.typicode.com'}
                    },
                ]
            },
            ]
        }
    }
];