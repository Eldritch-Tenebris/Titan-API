export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

export const generateRandomString = (length: number): string => {
    return Math.random().toString(36).substring(2, 2 + length);
};

// Outras funções utilitárias podem ser adicionadas aqui.