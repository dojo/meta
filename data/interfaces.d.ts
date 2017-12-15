/**
 * Interfaces and types common to dojo/meta
 */
export namespace Meta {
	/**
	 * The interface describing the `/data/packages.json`
	 */
	interface PackagesJson {
		/**
		 * A package that is part of Dojo 2 repo, where the key is the npm package name
		 */
		[package: string]: {
			/**
			 * A flag that indicates that package is _deprecated_ and therefore no longer being maintained
			 */
			deprecated?: boolean;

			/**
			 * The organisation and repository name on GitHub
			 */
			github: string;

			/**
			 * A flag that indicates that the package is not published on npm
			 */
			nopublish?: boolean;
		}
	}
}
