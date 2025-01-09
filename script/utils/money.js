export function formatCurrency(priceCents) {
    return (Math.round(priceCents) / 100).toFixed(2);
}

export function formatCurrencyRupees(priceCents) {
    let usd = priceCents / 100;
    let inr = usd * 80;
    return Math.round(inr.toFixed(2));
}