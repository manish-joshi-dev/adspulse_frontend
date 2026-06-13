import clsx from "clsx";
import {
  formatCurrency,
  formatDecimalCurrency,
  formatNumber,
  formatPercent,
  scoreTone
} from "../utils/formatters.js";

export const CampaignTable = ({ campaigns = [] }) => (
  <section className="panel overflow-hidden">
    <div className="border-b border-border-light p-6">
      <p className="text-sm font-medium uppercase text-text-subtle">Campaign diagnostics</p>
      <h2 className="mt-1 text-xl font-semibold text-ink">Highest-spend campaigns</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-zinc-200">
        <thead className="bg-cloud">
          <tr>
            {["Campaign", "Score", "Spend", "Clicks", "CTR", "Conv.", "CPA"].map((heading) => (
              <th key={heading} className="px-5 py-3 text-left text-xs font-semibold uppercase text-zinc-500">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border-light bg-bg-secondary">
          {campaigns.slice(0, 10).map((campaign) => (
            <tr key={campaign.campaign} className="transition-colors" style={{ ':hover': { background: 'var(--color-bg-secondary)' } }}>
              <td className="max-w-xs px-5 py-4 text-sm font-medium text-ink">
                <span className="block truncate">{campaign.campaign}</span>
                <span className="text-xs text-text-subtle">{campaign.status}</span>
              </td>
              <td className={clsx("px-5 py-4 text-sm font-semibold", scoreTone(campaign.score))}>
                {campaign.score}
              </td>
              <td className="px-5 py-4 text-sm text-text-primary">{formatCurrency(campaign.cost)}</td>
              <td className="px-5 py-4 text-sm text-text-primary">{formatNumber(campaign.clicks)}</td>
              <td className="px-5 py-4 text-sm text-text-primary">{formatPercent(campaign.ctr)}</td>
              <td className="px-5 py-4 text-sm text-text-primary">{formatNumber(campaign.conversions)}</td>
              <td className="px-5 py-4 text-sm text-text-primary">{formatDecimalCurrency(campaign.cpa)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

