import type { Page } from '@playwright/test';
import { BasePage } from './BasePage';

const baseUrl = process.env.BASE_URL;

if (!baseUrl) {
  throw new Error('BASE_URL is not set. Add it to your .env file before running the tests.');
}

const loginUrl = `${baseUrl.replace(/\/$/, '')}/web/index.php/auth/login`;

export class LoginPage extends BasePage {
	private readonly loginHeading = this.factory.getLocator('role', 'heading', { name: 'Login' });
	private readonly usernameInput = this.factory.getLocator('role', 'textbox', { name: 'Username' });
	private readonly passwordInput = this.factory.getLocator('role','textbox',{name: 'Password'});
	private readonly loginButton = this.factory.getLocator('role', 'button', { name: 'Login' });
	private readonly dashboardHeading = this.factory.getLocator('role','heading', { name: 'Dashboard' });
	private readonly authenticationError = this.factory.getLocator('text', /invalid credentials|required/i);

	constructor(page: Page) {
		super(page);
	}

	async launchApplication(): Promise<void> {
		await this.navigateTo(loginUrl);
		await this.expectLocatorVisible(this.loginHeading);
	}

	async login(username: string, password: string): Promise<void> {
		await this.fillLocator(this.usernameInput, username);
		await this.fillLocator(this.passwordInput, password);
		await this.clickLocator(this.loginButton);
	}

	async loginToApplication(username: string, password: string): Promise<void> {
		await this.login(username, password);
	}

	async expectDashboard(): Promise<void> {
		await this.expectLocatorVisible(this.dashboardHeading);
	}

	async expectInvalidCredentialsError(): Promise<void> {
		await this.expectLocatorVisible(this.authenticationError);
	}
}

